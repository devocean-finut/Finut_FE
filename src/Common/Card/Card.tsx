import { CardProps } from "./Card.type";

export const Card = ({
  width = "full",
  paddingHorizontal = 16,
  paddingVertical = 16,
  direction = "row",
  gap = 0,
  borderRadius = 8,
  shadow = true,
  background = "white",
  className = "",
  children,
  ...props
}: CardProps) => {
  const widthClassName = width === "full" ? "w-full" : `w-[${width}px]`;

  const paddingHorizontalClassName = `px-[${paddingHorizontal}px]`;

  const paddingVerticalClassName = `py-[${paddingVertical}px]`;

  const directionClassName = {
    row: "flex flex-row",
    column: "flex flex-col",
  };

  const gapClassName = `gap-[${gap}px]`;

  const borderRadiusClassName = `rounded-[${borderRadius}px]`;

  const backgroundClassName = {
    white: "bg-white",
    black: "bg-black",
    character: "bg-character",
    primary: "bg-primary",
    background: "bg-background",
    "modal-background": "bg-modal-background",
    gray10: "bg-gray-10",
    gray20: "bg-gray-20",
    gray30: "bg-gray-30",
    gray40: "bg-gray-40",
    "red-primary": "bg-red-primary",
    "red-secondary": "bg-red-secondary",
    "blue-primary": "bg-blue-primary",
    "blue-secondary": "bg-blue-secondary",
    "green-primary": "bg-green-primary",
    "green-secondary": "bg-green-secondary",
  };

  const shadowClassName = shadow
    ? "shadow-[0 1px 1px 1px rgba(0,0,0,0.25)]"
    : "";

  return (
    <div
      className={`
        ${widthClassName} 
        ${paddingHorizontalClassName} 
        ${paddingVerticalClassName}
        ${directionClassName} 
        ${gapClassName}
        ${borderRadiusClassName}
        ${backgroundClassName}
        ${shadowClassName}
        ${className}
        `}
      {...props}
    >
      {children}
    </div>
  );
};
