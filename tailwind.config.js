/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-20': '#53B3CB',
        'red-20': '#E01A4F',
        'gray-100': '#0D0D0D',
        'gray-500': '#5E0000',
        'primary-100': '#F15946',
        'primary-300': '#0C090D',
        'primary-500': '#FF6B66',
        'secondary-400': '#F9C22E',
        'secondary-500': '#53B3CB',
      },
      fontFamily: {
        instrument: ['Instrument Sans', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
      },
    },
    screens: {
      xs: { min: '375px', max: '767px' },
      sm: { min: '768px', max: '1059px' },
      md: '1060px',
    },
  },
  plugins: [],
};
