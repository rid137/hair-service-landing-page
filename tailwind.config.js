/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // baseColor: '#E8BDA1',
        baseColor: 'lightgreen',
        sideNavColor: 'rgba(0, 0, 0, .9)'
      },
      fontFamily: {
        sans: ['Varela Round', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        sassy: ['Sassy Frass', 'cursive']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
