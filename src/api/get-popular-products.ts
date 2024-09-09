import { api } from '@/lib/axios'

export type GetPopularProductsMetricsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProductsMetrics() {
  const response = await api.get<GetPopularProductsMetricsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
