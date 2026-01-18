import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Sophisticated dark slate
        accent: "#3B82F6", // Vibrant modern blue
        secondary: "#8B5CF6", // Premium purple
        success: "#10B981", // Fresh emerald
        warning: "#F59E0B", // Warm amber
        text: "#0F172A", // Rich dark slate
        muted: "#64748B", // Professional slate gray
        light: "#F8FAFC", // Clean light gray
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

