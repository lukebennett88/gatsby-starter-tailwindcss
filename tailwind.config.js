const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const aspectRatio = require('@tailwindcss/aspect-ratio');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // Default values here: https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    // See https://tailwindui.com/documentation for details

    // Tailwind UI comes bundled with the Typography plugin
    // Here are the docs:
    // https://github.com/tailwindlabs/tailwindcss-typography
    tailwindUI,
    // See https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme for details
    aspectRatio,
  ],
};
