/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        header: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        abril: ['"Abril Fatface"', "serif"],
        lora: ["Lora", "serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(80%)" },
          "100%": { transform: "translateX(-80%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
