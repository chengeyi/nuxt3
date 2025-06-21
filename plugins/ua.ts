// plugins/ua.ts
import { UAParser } from 'ua-parser-js'

export default defineNuxtPlugin((nuxtApp) => {
  const userAgent = import.meta.server
    ? nuxtApp.ssrContext?.event.node.req.headers['user-agent']
    : navigator.userAgent

  const parser = new UAParser(userAgent)
  const ua = parser.getResult()

  return {
    provide: {
      ua
    }
  }
})
