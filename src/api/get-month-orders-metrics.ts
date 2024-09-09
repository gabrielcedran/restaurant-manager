import { api } from '@/lib/axios'

export interface GetMonthOrdersMetricsResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersMetrics() {
  const response = await api.get<GetMonthOrdersMetricsResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
