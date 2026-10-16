// 團隊統一 API 回傳格式：{ code, message, data }
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface Product {
  id: number
  name: string
  price: number
  currency: 'TWD' | 'JPY' | 'USD'
}
