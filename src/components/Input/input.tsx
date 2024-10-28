import { InputProps } from "./input.types";

export const Input = ({
  type = "text",
  width = "full",
  paddingHorizontal = 16,
  paddingVertical = 16,
  borderRadius = 9999,
  size = "md",
  weight = "medium",
  color = "black",
  backgroundColor = "white",
  borderWidth = 0,
  borderColor = "gray10",
  placeholder,
  icon,
  value,
  onChange,
}: InputProps) => {
  const widthClassName = width === "full" ? "w-full" : `w-[${width}px]`;
  const paddingHorizontalClassName = `px-[${paddingHorizontal}px]`;
  const paddingVerticalClassName = `py-[${paddingVertical}px]`;
  const borderRadiusClassName = `rounded-[${borderRadius}px]`;
  const backgroundColorClassName = `bg-${backgroundColor}`;
  const borderWidthClassName = `border-[${borderWidth}px]`;
  const borderColorClassName = `border-${borderColor}`;

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

  const colorClassName = `text-${color}`;

  return (
    <div
      className={`${widthClassName}
        ${paddingHorizontalClassName}
        ${paddingVerticalClassName}
        ${borderRadiusClassName}
        ${backgroundColorClassName}
        ${borderWidthClassName}
        ${borderColorClassName}`}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${sizeClassName[size]} ${weightClassName[weight]} ${colorClassName}`}
      />
    </div>
  );
};
