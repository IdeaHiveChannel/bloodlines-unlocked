import { useLocalePath } from "../lib/i18n";
import { Link, type LinkComponentProps } from "@tanstack/react-router";

type Props = Omit<LinkComponentProps, "to"> & {
  to: string;
  params?: Record<string, string>;
};

/**
 * A wrapper around TanStack Link that automatically applies the current locale
 * prefix to the destination path and handles dynamic path parameters.
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
