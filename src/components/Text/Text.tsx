import { TextProps } from "./Text.types";

export const Text = ({
  size = "md",
  weight = "medium",
  color = "black",
  className,
  children,
}: TextProps) => {
  const sizeClassName = {
    xs: "text-[12px]",
    sm: "text-[14px]",
    md: "text-[16px]",
    lg: "text-[18px]",
    xl: "text-[20px]",
    "2xl": "text-[24px]",
  };

  const weightClassName = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colorClassName = {
    white: "text-white",
    black: "text-black",
    character: "text-character",
    primary: "text-primary",
    background: "text-background",
    "modal-background": "text-modal-background",
    gray10: "text-gray-10",
    gray20: "text-gray-20",
    gray30: "text-gray-30",
    gray40: "text-gray-40",
    "red-primary": "text-red-primary",
    "red-secondary": "text-red-secondary",
    "blue-primary": "text-blue-primary",
    "blue-secondary": "text-blue-secondary",
    "green-primary": "text-green-primary",
    "green-secondary": "text-green-secondary",
  };

  return (
    <div
      className={`${sizeClassName[size]} ${weightClassName[weight]} ${colorClassName[color]} ${className}`}
    >
      {children}
    </div>
  );
};
