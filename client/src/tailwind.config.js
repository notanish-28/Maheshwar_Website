/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // New Beige & Green Theme
        'sage': {
          50: '#f6f7f4',
          100: '#e8ece3',
          200: '#d1d9c7',
          300: '#b4c2a4',
          400: '#95a77f',
          500: '#7a8f62',
          600: '#5f714c',
          700: '#4a5a3d',
          800: '#3d4a33',
          900: '#343e2d',
        },
        'cream': {
          50: '#fdfcfb',
          100: '#faf7f2',
          200: '#f5ede1',
          300: '#ede3cf',
          400: '#e6d2b5',
          500: '#d9bd96',
          600: '#c9a574',
          700: '#b88b58',
          800: '#98724a',
          900: '#7d5e3f',
        },
        'forest': {
          50: '#f3f6f3',
          100: '#e3e9e1',
          200: '#c8d4c5',
          300: '#a4b79f',
          400: '#7e9577',
          500: '#5f7658',
          600: '#4a5e44',
          700: '#3c4b38',
          800: '#323e2f',
          900: '#2b3429',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}