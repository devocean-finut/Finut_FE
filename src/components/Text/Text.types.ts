import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight: "normal" | "medium" | "semibold" | "bold";
  color:
    | "white"
    | "black"
    | "character"
    | "primary"
    | "background"
    | "modal-background"
    | "gray10"
    | "gray20"
    | "gray30"
    | "gray40"
    | "red-primary"
    | "red-secondary"
    | "blue-primary"
    | "blue-secondary"
    | "green-primary"
    | "green-secondary";
}
