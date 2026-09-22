/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#051829",
        "navy-dark": "#04111D",
        gold: "#E7C645",
        "gold-dark": "#C9A730",
        cream: "#FAF8F3",
        ink: "#14212B",
        muted: "#5B6B74",
        line: "#EAE4D8"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-public-sans)", "-apple-system", "sans-serif"]
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(22px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(231,198,69,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(231,198,69,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(231,198,69,0)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease forwards",
        spinSlow: "spinSlow 100s linear infinite",
        floatY: "floatY 7s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        marquee: "marquee 26s linear infinite"
      }
    }
  },
  plugins: []
};
