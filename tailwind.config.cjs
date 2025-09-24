module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        'tecniprop': {
          'gris': '#282F32',
          'amarillo': '#FFE02E',
          'teal': '#0E8193',
          'teal-dark': '#00617A',
          'teal-darker': '#001C2A',
          'teal-accent': '#043541',
          'gris-claro': '#E4E6E7',
        }
      },
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
