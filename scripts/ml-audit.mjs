#!/usr/bin/env node
/**
 * Malayalam translation coverage audit.
 *
 * Walks the app source and reports every user-visible English string that will
 * still render in English when the Malayalam locale is active, grouped by file.
 *
 * Run: node scripts/ml-audit.mjs   ->  writes MALAYALAM_COVERAGE.md
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SRC = join(ROOT, "src");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "ui" || name === "ml-content") continue;
      walk(p, out);
    } else if (/\.(tsx|ts)$/.test(name)) out.push(p);
  }
  return out;
}

// ---------------------------------------------------------------- dictionary
const dictSrc = readFileSync(join(SRC, "lib/i18n/strings-ml.ts"), "utf8");
const dictKeys = new Set(
  [...dictSrc.matchAll(/^\s*"((?:[^"\\]|\\.)*)":/gm)].map((m) =>
    m[1].replace(/\\"/g, '"'),
  ),
);
const mlDictSrc = readFileSync(join(SRC, "lib/i18n/ml.ts"), "utf8");
const mlDictValues = mlDictSrc;

const MALAYALAM = /[\u0D00-\u0D7F]/;
const HAS_LETTERS = /[A-Za-z]{2,}/;

const IGNORE_FILES = [
  "lib/i18n/",
  // Resolved to Malayalam at runtime by src/lib/i18n/data.ts (ml-content/*.json).
  "lib/content.ts",
  "lib/pillars/",
  "lib/media.ts",
  "routeTree.gen.ts",
  "router.tsx",
  "server.ts",
  "start.ts",
  "lib/error-capture.ts",
  "lib/error-page.ts",
  "lib/lovable-error-reporting.ts",
  "lib/utils.ts",
  "hooks/",
  "components/cursor.tsx",
  "components/lenis-provider.tsx",
  "components/media/ResponsiveVideo.tsx",
  "components/procedures/canvases.tsx",
];

const files = walk(SRC).filter(
  (f) => !IGNORE_FILES.some((i) => relative(SRC, f).startsWith(i) || relative(SRC, f).includes(i)),
);

const findings = new Map(); // file -> [{kind, text, line}]

function add(file, kind, text, line) {
  const key = relative(ROOT, file);
  if (!findings.has(key)) findings.set(key, []);
  const list = findings.get(key);
  if (!list.some((f) => f.text === text && f.kind === kind)) list.push({ kind, text, line });
}

const TECHNICAL_META = new Set([
  "website", "article", "profile", "summary_large_image", "summary", "noindex",
  "width=device-width, initial-scale=1", "utf-8", "en", "ml", "en_IN", "ml_IN",
]);

const CODEY = /=>|\(\s*e\s*:|React\.|\bconst\b|\bprops\b|::|\{|\}/;

function covered(text) {
  const t = text.trim();
  if (!t || !HAS_LETTERS.test(t)) return true;
  if (CODEY.test(t)) return true;
  if (MALAYALAM.test(t)) return true;
  return dictKeys.has(t);
}

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const lines = src.split("\n");

  lines.forEach((line, i) => {
    const n = i + 1;
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;

    // 1. Head metadata literals: { title: "..." } / content: "..."
    const meta = line.match(/\b(?:title|content):\s*"((?:[^"\\]|\\.)+)"/);
    if (meta && HAS_LETTERS.test(meta[1]) && /routes\//.test(file) && !TECHNICAL_META.has(meta[1]) && !/^https?:/.test(meta[1])) {
      if (!MALAYALAM.test(meta[1])) add(file, "metadata", meta[1], n);
      return;
    }

    // 2. Bare JSX text nodes: >Some English text<
    for (const m of line.matchAll(/>([^<>{}\n]{3,})</g)) {
      const text = m[1].trim();
      if (!HAS_LETTERS.test(text)) continue;
      if (!covered(text)) add(file, "jsx-text", text, n);
    }

    // 3. String literals in data-ish object fields rendered to the UI
    const field = line.match(
      /\b(title|label|body|summary|caption|name|heading|blurb|text|quote|placeholder|aria-label|alt)\s*[:=]\s*"((?:[^"\\]|\\.){3,})"/,
    );
    if (field) {
      const text = field[2];
      if (
        HAS_LETTERS.test(text) &&
        !covered(text) &&
        !/^https?:/.test(text) &&
        !/^[a-z0-9:_-]+$/.test(text) &&
        !TECHNICAL_META.has(text)
      ) {
        add(file, "data-string", text, n);
      }
    }
  });
}

// ------------------------------------------------------------------ data libs
const dataFiles = ["lib/press.ts", "lib/stories.ts", "lib/contact.ts"];
for (const rel of dataFiles) {
  const p = join(SRC, rel);
  let src;
  try {
    src = readFileSync(p, "utf8");
  } catch {
    continue;
  }
  src.split("\n").forEach((line, i) => {
    const m = line.match(/\b(label|title|summary|body|caption|consentNote|name)\s*[:=]\s*"((?:[^"\\]|\\.){3,})"/);
    if (m && HAS_LETTERS.test(m[2]) && !covered(m[2])) add(p, "data-file", m[2], i + 1);
  });
}

// -------------------------------------------------------------------- report
const total = [...findings.values()].reduce((a, b) => a + b.length, 0);
const now = new Date().toISOString().slice(0, 10);

let out = `# Malayalam translation coverage audit\n\n`;
out += `Generated ${now} by \`node scripts/ml-audit.mjs\`.\n\n`;
out += `Dictionary entries in \`src/lib/i18n/strings-ml.ts\`: **${dictKeys.size}**\n\n`;
out += `Strings still falling back to English: **${total}**\n\n`;

if (total === 0) {
  out += `No user-visible English strings remain outside the translation layer.\n`;
} else {
  out += `| Kind | Meaning |\n| --- | --- |\n`;
  out += `| \`metadata\` | Route \`head()\` title/description/OG copy |\n`;
  out += `| \`jsx-text\` | Literal text rendered in JSX without \`tx()\` |\n`;
  out += `| \`data-string\` | Object field in a component rendered to the UI |\n`;
  out += `| \`data-file\` | String in a shared data module |\n\n`;
  for (const [file, list] of [...findings.entries()].sort()) {
    out += `## ${file}\n\n`;
    for (const f of list.sort((a, b) => a.line - b.line)) {
      const text = f.text.length > 120 ? `${f.text.slice(0, 120)}…` : f.text;
      out += `- L${f.line} \`${f.kind}\` — ${text.replace(/\|/g, "\\|")}\n`;
    }
    out += `\n`;
  }
}

writeFileSync(join(ROOT, "MALAYALAM_COVERAGE.md"), out);
console.log(`${total} untranslated strings across ${findings.size} files -> MALAYALAM_COVERAGE.md`);
void mlDictValues;
