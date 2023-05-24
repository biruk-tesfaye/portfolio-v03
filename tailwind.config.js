import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },

      // create custom box shadow for blog cards
      boxShadow: {
        'blog-card': '0px 2px 17px 2px rgba(181, 190, 178, 0.25)'
      }
    }
  },
  plugins: []
};
