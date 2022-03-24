import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - timer',
    title: 'timer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/ipad_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/ipadpro1_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/ipadpro2_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/ipadpro3_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/iphone5_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/iphone6_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', href: 'splash/iphoneplus_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: 'splash/iphonex_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: 'splash/iphonexr_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: 'splash/iphonexsmax_splash.png' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/mixin-common-methods'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      lighten: true,
      themes: {
        lighten: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  pwa: {
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
    },
    manifest: {
      lang: 'ja',
      name: "サントリー Pomodoro Timer",
      short_name: "Pomo Timer",
      description: 'Pomodoro timer',
      display: 'standalone',
      theme_color: '#000',
      background_color: '#fff',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '../v.png',
          sizes: '120x120',
          type: 'image/png'
        }
      ]
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
