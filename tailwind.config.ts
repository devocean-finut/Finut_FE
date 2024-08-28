import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      character: "#FFC89D",
      primary: "#8C6C56",
      background: "#FFF5EB",
      "modal-background": "#D9D9D966",
      gray: {
        10: "#F6F6F6",
        20: "#E8E8E8",
        30: "#BDBDBD",
        40: "#666666",
      },
      red: {
        primary: "#FF1F1F",
        secondary: "#FF4545",
      },
      blue: {
        primary: "#1976D2",
        secondary: "#1E88E5",
      },
      green: {
        primary: "#43A047",
        secondary: "#C5FFC7",
      },
    },
  },
  plugins: [],
};
export default config;
