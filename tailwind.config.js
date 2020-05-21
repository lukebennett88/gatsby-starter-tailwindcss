const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [
    tailwindUI({
      layout: 'sidebar',
    }),
  ],
};
