// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    typescript: {
        typeCheck: true
    },
    ssr: true,
    spaLoadingTemplate: false,
    css: ['~/assets/css/main.css']
})
