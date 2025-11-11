import type { FC } from "react";
import type { LinkProps as RRLinkProps } from "react-router";
import { Link as RRLink } from "react-router";
import { useResolvedPath, useMatch } from "react-router";
export type LinkProps = RRLinkProps & {};
export const Link: FC<LinkProps> = ({
  className: _className,
  to,
  ...props
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const className = [_className, match ? "underline" : ""].join(" ");
  return <RRLink {...props} to={to} className={className} />;
};
