/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],

  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '0%': { 'border-color': 'white' },
          '25%': { 'border-color': 'black' },
          '50%': { 'border-color': 'white' },
          '75%': { 'border-color': 'black' },
          '100%': { 'border-color': 'white' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
        fall: 'fall 1s ease-out forwards',
        slideIn: 'slideIn 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serif'],
        mona: ['"Mona Sans"', 'sans-serif'],
        varela: ['"Varela Round"', 'sans-serif'],
      },
      colors: {
        primary: '#CB9A26',
        secondary: '#BE1923',
      },
    },
  },

  plugins: [require('preline/plugin')],
};
