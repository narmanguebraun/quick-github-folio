/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f9f9f9",
      black: "#000",
      lightblue: "#6eaefc",
      darkblue: "#161318",
      gray: "#6F708B",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    letterSpacing: {
      normal: "0",
      wide: ".035em",
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
};
