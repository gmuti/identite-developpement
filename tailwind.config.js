/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#051829",
        "navy-dark": "#04111D",
        "navy-light": "#13314A",
        // Textes sur fond marine : secondaire, discret, très discret
        "on-navy": "#CBD9E1",
        "on-navy-muted": "#9FB3BF",
        "on-navy-faint": "#7C93A0",
        gold: "#E7C645",
        "gold-hover": "#D9B735",
        // Or assombri pour le texte sur fond clair (contraste AA)
        "gold-dark": "#7C671D",
        // Texte secondaire posé sur un fond or
        "on-gold": "#4A3E10",
        cream: "#FAF8F3",
        sand: "#EFE9DC",
        ink: "#14212B",
        muted: "#5B6B74",
        line: "#EAE4D8",
        success: "#1E7A3D",
        "success-on-dark": "#4ADE80",
        // Terres de la carte du monde sur fond marine
        land: "#13283B"
      },
      fontFamily: {
        // Une seule famille sans-serif pour tout le site (Figtree, auto-hébergée)
        sans: ["var(--font-figtree)", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-figtree)", "-apple-system", "Segoe UI", "sans-serif"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};
