import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type AsType = "div" | "main" | "header" | "section" | "footer";
type ContainerProps<T extends AsType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends AsType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Element = as || "div";
  return <Element {...props}>{children}</Element>;
}

export default Container;
