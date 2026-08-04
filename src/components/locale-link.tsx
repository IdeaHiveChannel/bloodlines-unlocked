import { Link, type LinkComponentProps } from "@tanstack/react-router";
import { useLocalePath } from "../lib/i18n/react";

type Props = Omit<LinkComponentProps, "to" | "params"> & {
  /** English path, e.g. "/diseases/stroke". The locale prefix is added automatically. */
  to: string;
};

/**
 * Locale-aware <Link>. Call sites keep using plain English paths; this adds the
 * /ml prefix when the visitor is on the Malayalam side of the site.
 */
export function LocaleLink({ to, ...rest }: Props) {
  const path = useLocalePath();
  return <Link {...(rest as LinkComponentProps)} to={path(to) as never} />;
}
