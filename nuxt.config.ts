// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  ssr: false,
  app: {
    head: {
      title: 'Scigate – Crossrecherche',
      meta: [
        {
          name: 'description',
          content:
            'Scigate ist ein Showcase und One-Stop-Shop für (Rechts-)Daten. Zurzeit handelt es sich bei Scigate um einen frühen Prototyp',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  imports: {
    dirs: ['stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: '#4338CA',
            'primary-hover': '#3730A3',
            'primary-active': '#312E81',
            danger: '#991B1B',
            dark: '#101010',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans'],
          title: ['Lexend', 'ui-sans'],
        },
        container: {
          screens: {
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1240px',
          },
        },
      },
      // safelisted classes are never excluded from the bundle because they may be programmatically created or changed at runtime
      safelist: [
        // modals
        'max-w-none',
        'max-w-xs',
        'max-w-sm',
        'max-w-md',
        'max-w-lg',
        'max-w-xl',
        'max-w-2xl',
        'max-w-3xl',
        // notifications
        'bg-emerald-100',
        'border-emerald-300',
        'text-emerald-800',
        'bg-amber-100',
        'border-amber-300',
        'text-amber-800',
        'bg-red-100',
        'border-red-300',
        'text-red-800',
      ],
      plugins: [],
    },
  },
});
