export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number | "full";
  paddingHorizontal: number;
  paddingVertical: number;
  direction: "row" | "column";
  gap: number;
  borderRadius: number;
  shadow: boolean;
  background:
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
