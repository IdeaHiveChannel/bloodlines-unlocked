import { Link, type LinkComponentProps } from "@tanstack/react-router";
import { useLocalePath } from "../lib/i18n/react";

type Props = Omit<LinkComponentProps, "to" | "params"> & {
  /** English path, e.g. "/diseases/$slug". The locale prefix is added automatically. */
  to: string;
  /** Values for `$param` segments in `to`. */
  params?: Record<string, string>;
};

/**
 * Locale-aware <Link>. Call sites keep using plain English paths; this adds the
 * /ml prefix when the visitor is on the Malayalam side of the site.
 */
export function LocaleLink({ to, params, activeProps, ...rest }: Props & { activeProps?: LinkComponentProps["activeProps"] }) {
  const localise = useLocalePath();
  const [rawPath, hash] = to.split("#");
  let path = rawPath;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      path = path.replace(`$${key}`, encodeURIComponent(value));
    }
  }
  return (
    <Link
      {...(rest as LinkComponentProps)}
      to={localise(path) as never}
      activeProps={activeProps}
      {...(hash ? { hash } : {})}
    />
  );
}
