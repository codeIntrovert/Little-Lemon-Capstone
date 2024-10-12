/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CE14',
        'secondary': '#043227',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}