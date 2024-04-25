/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-light': '#FFFFFF',
        'base-dark': {
          60: '#CFCFCF',
          100: '#242424'
        },
        'brand-primary': '#E0533D',
        'brand-secondary': '#9DA7D0',
        'brand-tertiary': '#377CC8',
        'brand-accent': '#469B88',
        'brand-primary-card': '#EED868',
        'brand-secondary-card': '#E78C9D'
      }
    }
  },
  plugins: []
}
