/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // n8n-inspired warm neutral base
        cream: {
          DEFAULT: "#f5f3ef",
          50: "#f9f8f6",
          100: "#f2f0ec",
          200: "#e6e2dc",
        },
        paper: "#ffffff",
        pale: "#fce8ee",
        ink: {
          DEFAULT: "#151519",
          soft: "#3f3e45",
          muted: "#67656d",
          faint: "#929097",
        },
        brand: {
          DEFAULT: "#ea4b71",
          600: "#d83b61",
          700: "#be2f53",
          soft: "#fce8ee",
        },
        night: {
          DEFAULT: "#17181c",
          800: "#202126",
          700: "#292a30",
        },
        line: "#dedad4",
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
        soft: "0 2px 24px -12px rgba(21, 21, 25, 0.18)",
        card: "0 10px 40px -18px rgba(21, 21, 25, 0.22)",
        pill: "0 8px 24px -10px rgba(234, 75, 113, 0.45)",
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
