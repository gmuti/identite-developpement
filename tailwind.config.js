/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#051829",
        "navy-dark": "#04111D",
        // Textes sur fond marine : secondaire, discret, très discret
        "on-navy": "#CBD9E1",
        "on-navy-muted": "#9FB3BF",
        "on-navy-faint": "#7C93A0",
        gold: "#E7C645",
        "gold-hover": "#D9B735",
        // Assombri par rapport à la maquette d'origine (#C9A730, contraste 2.2:1 sur fond clair,
        // sous le seuil AA de 4.5:1 pour le texte) - même teinte, luminosité réduite pour l'accessibilité.
        "gold-dark": "#7C671D",
        // Texte secondaire posé sur un fond or
        "on-gold": "#4A3E10",
        cream: "#FAF8F3",
        ink: "#14212B",
        muted: "#5B6B74",
        line: "#EAE4D8",
        success: "#1E7A3D",
        "success-on-dark": "#4ADE80"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-public-sans)", "-apple-system", "sans-serif"]
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.8, 0.2, 1)"
      }
    }
  },
  plugins: []
};
