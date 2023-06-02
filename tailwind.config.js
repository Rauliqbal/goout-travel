/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
   theme: {
      extend: {
         container: {
            center: true,
            screens: {
               sm: "512px",
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               "1440px": "1240px",
            },
         },

         fontFamily: {
            poppins: ["poppins", "sans-serif"],
         },
         backgroundImage: {
            pattern: "url('~/assets/images/global.svg')",
         },
      },
   },
   plugins: [],
};
