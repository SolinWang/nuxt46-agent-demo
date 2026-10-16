import type { ApiResponse, Product } from '#shared/types/api'

// Demo 用靜態資料；實務上替換為後端 API
const PRODUCTS: readonly Product[] = [
  { id: 1, name: '東京迪士尼樂園門票', price: 2350, currency: 'TWD' },
  { id: 2, name: '京都和服體驗', price: 1280, currency: 'TWD' },
  { id: 3, name: '首爾 Nanta 秀', price: 990, currency: 'TWD' },
]

export default defineEventHandler((event): ApiResponse<Product[]> => {
  const query = getQuery(event)
  const keyword = typeof query.q === 'string' ? query.q.trim() : ''
  const data = keyword
    ? PRODUCTS.filter((p) => p.name.includes(keyword))
    : [...PRODUCTS]

  return { code: 0, message: 'ok', data }
})
