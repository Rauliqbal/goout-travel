// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         meta: [{ name: "description", content: "This Website using Nuxt 3 and Tailwind CSS" }],
         link: [
            {
               href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
               rel: "stylesheet",
            },
         ],
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
});
