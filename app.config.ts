export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer'
  },
  ui: {
    primary: 'yellow',
    gray: 'cool',

  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
