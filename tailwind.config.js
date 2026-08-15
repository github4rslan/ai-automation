/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // warm cream base, inspired by the reference palette
        cream: {
          DEFAULT: "#f0ecde",
          50: "#f7f4ea",
          100: "#f2eede",
          200: "#e7e1cd",
        },
        paper: "#ffffff",
        pale: "#fff9e6",
        ink: {
          DEFAULT: "#141416",
          soft: "#3d3d42",
          muted: "#5f5f68",
          faint: "#8a8a93",
        },
        brand: {
          DEFAULT: "#ff5e32",
          600: "#ec4a1f",
          700: "#d13f17",
          soft: "#ffe7de",
        },
        night: {
          DEFAULT: "#17171b",
          800: "#202026",
          700: "#2b2b31",
        },
        line: "#e2ddcd",
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
        soft: "0 2px 24px -12px rgba(20, 20, 22, 0.18)",
        card: "0 10px 40px -18px rgba(20, 20, 22, 0.22)",
        pill: "0 8px 24px -10px rgba(255, 94, 50, 0.5)",
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
