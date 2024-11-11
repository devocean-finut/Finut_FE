import { InputProps } from "./input.types";
import classNames from "classnames";

export const Input = ({
  className,
  type = "text",
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
  placeholderColor = "gray-30",
  placeholder,
  icon,
  value,
  onChange,
  ...props
}: InputProps) => {
  const backgroundColorClassName = classNames({
    [`bg-${backgroundColor}`]: backgroundColor,
  });

  const borderColorClassName = classNames({
    [`border-${borderColor}`]: borderColor,
  });
  const placeholderColorClassName = `placeholder:text-${placeholderColor}`;
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

  const weightClassName = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  const colorClassName = `text-${color}`;

  return (
    <div
      style={style}
      className={classNames(
        backgroundColorClassName,
        borderColorClassName,
        placeholderColorClassName,
        className
      )}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(
          "w-full focus:outline-none",
          backgroundColorClassName,
          sizeClassName[fontSize],
          weightClassName[weight],
          colorClassName
        )}
        {...props}
      />
    </div>
  );
};
