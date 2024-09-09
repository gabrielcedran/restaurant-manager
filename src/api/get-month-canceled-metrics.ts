import { api } from '@/lib/axios'

export interface GetMonthCanceledMetricsResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledMetrics() {
  const response = await api.get<GetMonthCanceledMetricsResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
