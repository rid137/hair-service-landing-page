/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": { 
      transform: "rotateY(180deg)", 
    },
    ".preserve-3d": { 
      transformStyle: "preserve-3d", 
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});



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
    require('tailwind-scrollbar'),Myclass
  ],
}
