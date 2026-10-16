// Requires: Nuxt 4.6.x / Nuxt CLI 4.x / Node.js ^22.22.3 || ^24.15.0 || >=26.0.0
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { strict: true },
  nitro: {
    // 啟用 Nitro tasks，供 `nuxt task` 示範使用
    experimental: { tasks: true },
  },
})
