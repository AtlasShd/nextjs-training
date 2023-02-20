/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'own-red': 'red',
      },
    }
  },
  plugins: [],
}
