import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada na imagem fornecida
        primary: {
          50: "#E9DFD6", // Cinza claro
          100: "#F8F0E5", // Creme claro
          200: "#CCBDAA", // Bege
          300: "#5D768C", // Azul acinzentado
          400: "#142431", // Azul escuro
          500: "#142431", // Azul escuro principal
          600: "#0F1A25", // Azul mais escuro
          700: "#0A1219", // Azul muito escuro
          800: "#060B0F", // Quase preto
          900: "#030508", // Preto
        },
        secondary: {
          50: "#F8F0E5", // Creme claro
          100: "#E9DFD6", // Cinza claro
          200: "#CCBDAA", // Bege
          300: "#5D768C", // Azul acinzentado
          400: "#142431", // Azul escuro
          500: "#5D768C", // Azul acinzentado principal
          600: "#4A5F73", // Azul acinzentado mais escuro
          700: "#3A4A5A", // Azul acinzentado escuro
          800: "#2A3642", // Azul acinzentado muito escuro
          900: "#1A2229", // Azul acinzentado quase preto
        },
        accent: {
          50: "#CCBDAA", // Bege
          100: "#D4C4A8", // Bege claro
          200: "#B8A085", // Bege médio
          300: "#A68B6F", // Bege escuro
          400: "#947659", // Bege mais escuro
          500: "#CCBDAA", // Bege principal
          600: "#B8A085", // Bege escuro
          700: "#A68B6F", // Bege mais escuro
          800: "#947659", // Bege muito escuro
          900: "#826543", // Bege quase marrom
          950: "#87908E", // Cinza esverdeado
        },
        neutral: {
          50: "#F8F0E5", // Creme claro
          100: "#E9DFD6", // Cinza claro
          200: "#D4C4A8", // Bege claro
          300: "#CCBDAA", // Bege
          400: "#5D768C", // Azul acinzentado
          500: "#142431", // Azul escuro
          600: "#0F1A25", // Azul mais escuro
          700: "#0A1219", // Azul muito escuro
          800: "#060B0F", // Quase preto
          900: "#030508", // Preto
          950: "#132331", // Azul escuro custom
        },
      },
      fontFamily: {
        sans: [
          "Average Sans",
          "Avenir Light",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        heading: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "Inter",
          "sans-serif",
        ],
        body: [
          "Average Sans",
          "Avenir Light",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        accent: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "sans-serif",
        ],
        diodrum: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "sans-serif",
        ],
        avenir: ["Average Sans", "Avenir Light", "Inter", "sans-serif"],
        average: ["Average Sans", "Inter", "system-ui", "sans-serif"],
        "average-light": ["Average Sans", "Inter", "system-ui", "sans-serif"],
        "average-thin": ["Average Sans", "Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "average-light": "300",
        "average-thin": "100",
        average: "100",
      },
    },
  },
  plugins: [],
};
export default config;
