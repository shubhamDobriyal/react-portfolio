/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',      // Small devices
        'md': '481px',      // Medium devices
        'lg': '769px',      // Large devices
        'xl': '1025px',     // Extra-large devices
        '2xl': '1201px',    // 2x Extra-large devices
        '3xl': '1225px',    // 3x Extra-large devices
      },
      maxWidth: {
        'screen-sm': '480px',    // Max width for small screens
        'screen-md': '768px',    // Max width for medium screens
        'screen-lg': '1024px',    // Max width for large screens
        'screen-xl': '1200x',   // Max width for extra-large screens
        'screen-2xl': '1224px',  // Max width for 2x extra-large screens
        'screen-3xl': '2560px',  // Max width for 3x extra-large screens
      },
    },
  },
  plugins: [],
}