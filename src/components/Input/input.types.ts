export interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "number";
  width: number | "full";
  paddingHorizontal: number;
  paddingVertical: number;
  borderRadius: number;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight: "normal" | "medium" | "semibold" | "bold";
  color: "white" | "black" | "gray10" | "gray20" | "gray30" | "gray40";
  backgroundColor:
    | "white"
    | "black"
    | "gray10"
    | "gray20"
    | "gray30"
    | "gray40";
  placeholder: string;
  placeholderColor:
    | "white"
    | "black"
    | "gray10"
    | "gray20"
    | "gray30"
    | "gray40";

  borderWidth: number;
  borderColor: "white" | "black" | "gray10" | "gray20" | "gray30" | "gray40";
  icon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
