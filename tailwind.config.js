/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color_Geral': '#1E1E1E',
        'color_Letras': '#7e7e7e',
        'color_Fundos': 'rgba(203, 234, 227, 0.1);',
        'color_HTML': '#475ABF',
        'color_CSS': '#43A1E5',
        'color_REACT': '#FF3535',
        'color_buscaTAG': '#24FF00',
      },

      fontFamily: {
        'Fira_Code':['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
