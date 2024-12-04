import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // sm: '480px',  // Small screens (mobile)
        // md: '768px',  // Medium screens (tablets)
        // lg: '1024px', // Large screens (laptops)
        xl: "1280px", // Extra large screens (desktops)
        "2xl": "1536px", // 2x extra large screens
      },
    },
  },
  plugins: [],
} satisfies Config;
