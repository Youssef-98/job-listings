module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': 'hsl(180, 52%, 96%)',
        'bottom-info': 'hsl(180, 8%, 52%)',
        'primary': 'hsl(180, 29%, 50%)',
        'featured': 'hsl(180, 14%, 20%)',
        'filter': 'hsl(180, 31%, 95%)',
      },
      screens: {
        // => @media (min-width: 375px) { ... }
        'mobile': '375px',
  
        // => @media (min-width: 1440px) { ... }
        'desktop': '1440px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
