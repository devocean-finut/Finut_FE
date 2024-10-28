import React from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | "full";
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "white" | "black" | "gray-10" | "gray-20" | "gray-30" | "gray-40";
  backgroundColor?:
    | "white"
    | "black"
    | "gray-10"
    | "gray-20"
    | "gray-30"
    | "gray-40"
    | "red-primary"
    | "red-secondary"
    | "blue-primary"
    | "blue-secondary"
    | "green-primary"
    | "green-secondary"
    | "character"
    | "primary"
    | "background"
    | "modal-background";
  borderWidth?: number;
  borderColor?:
    | "white"
    | "black"
    | "gray-10"
    | "gray-20"
    | "gray-30"
    | "gray-40";
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
