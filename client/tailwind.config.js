/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rajasthan-red': '#d92323',
        'rajasthan-orange': '#ff6b35',
        'rajasthan-yellow': '#f4c542',
        'rajasthan-blue': '#2c5aa0',
        'rajasthan-sand': '#e6d2b5',
      },
      fontFamily: {
        'rajasthan': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
