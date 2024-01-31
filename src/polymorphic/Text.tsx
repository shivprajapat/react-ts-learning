import React, { ElementType, ReactNode } from "react";

type TextOwnProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends ElementType = "div">({
  size,
  color,
  as,
  children,
}: TextProps<E>) => {
  const Component = as || "div";

  return (
    <Component className={`text-${size} text-${color}`}>{children}</Component>
  );
};

export default Text;
