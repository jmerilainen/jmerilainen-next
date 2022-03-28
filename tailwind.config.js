module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: '#fbfbf2',
      },
      fontFamily: {
        heading: 'Karla, sans-serif',
        copy: 'Inconsolata, sans-serif',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.slate.700'),
              color: theme('colors.slate.300'),
            },
            'h1, h2,h3,h4': {
              color: theme('colors.slate.100'),
            },
            hr: { borderColor: theme('colors.slate.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.slate.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.slate.500') },
              },
            },
            strong: { color: theme('colors.slate.100') },
            thead: {
              color: theme('colors.slate.100'),
              borderBottomColor: theme('colors.slate.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.slate.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
