/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        rise: { "0%": { transform: "translateY(10px)", opacity: 0 }, "100%": { transform: "translateY(0)", opacity: 1 } }
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        rise: "rise 0.5s ease-out"
      },
      colors: {
        brand: {
          600: "#4f46e5",
          700: "#4338ca"
        }
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
