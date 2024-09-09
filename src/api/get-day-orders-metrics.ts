import { api } from '@/lib/axios'

export interface GetDayOrdersMetricsResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersMetrics() {
  const response = await api.get<GetDayOrdersMetricsResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
