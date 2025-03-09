/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(95.52deg, #00AEFF 2.2%, #1778FF 96%)",
      },
      fontFamily: {
        satoshi: ["Satoshi"],
        manrope: ["Manrope"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#010101",
      },
    },
  },
  plugins: [],
};
