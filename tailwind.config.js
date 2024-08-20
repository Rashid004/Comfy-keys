/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#44D8B8",
          500: "#202020",
          600: "#FAFFF7",
          700: "#10312A",
        },
        dark: {
          50: "#ABA7A7",
          100: "#848282",
          200: "#8D8A8A",
          300: "rgba(195,191,217,0.40)",
          400: "rgba(195,191,217,0.13)",
          500: "#18473D",
          600: "#C5AC8D",
          700: "#143F36",
          900: "#000000 ",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        resgak: ["Resgak", "font-serif"],
      },
    },
  },
  plugins: [],
};
