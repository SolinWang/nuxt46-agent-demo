// Nitro task：模擬快取預熱，供 `nuxt task run cache:warm` 示範
export default defineTask({
  meta: {
    name: 'cache:warm',
    description: '預熱商品列表快取（demo）',
  },
  run({ payload }) {
    const locale = typeof payload.locale === 'string' ? payload.locale : 'zh-tw'
    return { result: { warmed: true, locale } }
  },
})
