import React from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";

export const Button = ({
  disabled = false,
  width = "full",
  paddingHorizontal = 16,
  paddingVertical = 16,
  borderRadius = 9999,
  fontSize = "md",
  weight = "medium",
  color = "black",
  backgroundColor = "white",
  borderWidth = 0,
  borderColor = "gray-10",
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const style = {
    width: width === "full" ? "100%" : `${width}px`,
    paddingLeft: `${paddingHorizontal}px`,
    paddingRight: `${paddingHorizontal}px`,
    paddingTop: `${paddingVertical}px`,
    paddingBottom: `${paddingVertical}px`,
    borderRadius: `${borderRadius}px`,
    borderWidth: `${borderWidth}px`,
  };
  const sizeClassName = {
    xs: "text-[12px]",
    sm: "text-[14px]",
    md: "text-[16px]",
    lg: "text-[18px]",
    xl: "text-[20px]",
    "2xl": "text-[24px]",
  };
  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={classNames([
        sizeClassName[fontSize],
        `font-${weight}`,
        `text-${color}`,
        `bg-${backgroundColor}`,
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
