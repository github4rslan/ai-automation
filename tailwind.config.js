/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // violet and midnight automation palette
        cream: {
          DEFAULT: "#f7f5fc",
          50: "#fbfafe",
          100: "#f3f0fa",
          200: "#e7e1f2",
        },
        paper: "#ffffff",
        pale: "#ede9fe",
        ink: {
          DEFAULT: "#181524",
          soft: "#403a52",
          muted: "#696178",
          faint: "#958ca4",
        },
        brand: {
          DEFAULT: "#7c3aed",
          300: "#a78bfa",
          600: "#6d28d9",
          700: "#5b21b6",
          soft: "#ede9fe",
        },
        night: {
          DEFAULT: "#151225",
          800: "#1e1932",
          700: "#29223f",
        },
        line: "#e2dcec",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 2px 24px -12px rgba(21, 18, 37, 0.18)",
        card: "0 10px 40px -18px rgba(21, 18, 37, 0.24)",
        pill: "0 8px 24px -10px rgba(124, 58, 237, 0.48)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        dash: "dash 1s linear infinite",
      },
    },
  },
  plugins: [],
};
