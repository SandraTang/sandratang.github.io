/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-black": "var(--custom-black)",
      },
      screens: {
        xs: "480px",
        ml: "975px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
