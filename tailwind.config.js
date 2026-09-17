/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#10151D",
        surface2: "#141A23",
        line: "#1F2731",
        ink: "#E7EAEE",
        muted: "#8B93A1",
        amber: "#E8B04B",
        cyan: "#4FD1C5",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
