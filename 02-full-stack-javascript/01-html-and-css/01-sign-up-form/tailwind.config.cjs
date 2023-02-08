/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,ts}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        green: {
          100: '#dee2da',
          200: '#bdc5b6',
          300: '#9ba791',
          400: '#7a8a6d',
          500: '#596d48',
          600: '#47573a',
          700: '#35412b',
          800: '#242c1d',
          900: '#12160e'
        }
      }
    }
  },
  plugins: []
};
