/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.js", './src/**/**/*.js'],
  theme: {
    extend: {
      colors: {
       black21: '#1D1E21',
       green0C: '#476E0C',
       green18: '#8EDC18'
      },
    },
  },
  plugins: [],
}
