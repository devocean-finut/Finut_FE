export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number";
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
    | "gray-40";
  placeholder: string;
  placeholderColor?:
    | "white"
    | "black"
    | "gray-10"
    | "gray-20"
    | "gray-30"
    | "gray-40";
  borderWidth?: number;
  borderColor?:
    | "white"
    | "black"
    | "gray-10"
    | "gray-20"
    | "gray-30"
    | "gray-40";
  icon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
