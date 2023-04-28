// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',

  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Poppins': true,

    }
  },


  image: {
    // Options
  },
  ssr: true,
    extends: [
    'nuxt-seo-kit'
  ],
  routeRules: {
    // // use the `index` shortcut for simple rules
    // '/secret/**': { index: false },
    // // add exceptions for individual routes
    // '/secret/visible': { index: true },
    // use the `robots` rule if you need finer control
    '/custom-robots': { robots: 'index, follow' },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://lovinadolphintours.com',
      siteName: 'Lovina Dolphin Tours',
      siteDescription: 'Lovina Ocean Tour is a popular tour operator located in Lovina Beach, Bali, known for its scenic boat tours and water activities. you can enjoy dolphin watching, snorkeling, and diving in the crystal clear waters of the Bali Sea while taking in the breathtaking views of the surrounding coastline. The tour provides a memorable experience for travelers seeking adventure and relaxation in a beautiful tropical setting.',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },




})
