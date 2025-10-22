const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        // ThriveHer brand palette
        "brand-blue": "#21273F", // Primary foundation
        "brand-pink": "#D1A38A", // Warm accent
        "brand-cream": "#F9E8CF", // Neutral background
        "brand-teal": "#3A7C7C", // Modern calm accent
        "brand-teal-light": "#E8F3F3", // Light teal background
        "brand-gold": "#C78E1D", // Premium CTA only
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        "section-mobile": "40px",
        "section-desktop": "80px",
      },
    },
  },
  plugins: [flowbiteReact],
};