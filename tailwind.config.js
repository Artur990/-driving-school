const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightWhite: '#F7FBFC',
        darkGray: '#323232',
      },
    },
  },
  // plugins: [
  //   plugin(function ({ addBase, theme }) {
  //     addBase({
  //       h1: { fontSize: theme('fontSize.3xl') },
  //       h2: { fontSize: theme('fontSize.2xl') },
  //       h3: { fontSize: theme('fontSize.xl') },
  //     });
  //   }),
  // ],
};
