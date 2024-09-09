import { api } from '@/lib/axios'

export interface GetMonthTurnoverMetricsResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthTurnoverMetrics() {
  const response = await api.get<GetMonthTurnoverMetricsResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
