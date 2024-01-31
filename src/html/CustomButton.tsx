import React, { ComponentProps } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  size?: "large" | "small" | "icon";
  children: string;
  icon?: boolean;
} & Omit<ComponentProps<"button">, "children">;

const CustomButton = ({
  variant,
  size,
  children,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`btn-${variant} ${size}`} {...rest}>
      {icon}
      {children}
    </button>
  );
};

export default CustomButton;
