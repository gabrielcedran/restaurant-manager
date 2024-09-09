import { api } from '@/lib/axios'

export type GetDailyTurnoverMetricsResponse = {
  date: string
  receipt: number
}[]

interface GetDailyTurnoverMetricsParams {
  from?: Date
  to?: Date
}

export async function getDailyTurnoverMetrics({
  from,
  to,
}: GetDailyTurnoverMetricsParams) {
  const response = await api.get<GetDailyTurnoverMetricsResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
