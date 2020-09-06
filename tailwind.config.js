const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const typography = require('@tailwindcss/typography');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // See https://tailwindui.com/documentation for details
    tailwindUI,
    // See https://github.com/tailwindlabs/tailwindcss-typography for details
    typography,
  ],
};
