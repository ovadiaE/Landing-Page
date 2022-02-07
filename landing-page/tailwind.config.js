module.exports = {
  content: [  "./src/**/*.{js,jsx}",   "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'md':'769px', 
      'lg': '1536px',
      'sm': {'max': '450px'}
      },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
