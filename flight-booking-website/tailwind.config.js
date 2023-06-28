/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'text': '#d7eef4',
      'background': '#030a0c',
      'primary-button': '#e4a0d6',
      'secondary-button': '#08181c',
      'accent': '#b4ce50',
      'white': '#fff',
      'black': '#000',
    }
  },
  plugins: [],
}