import { http, HttpResponse } from 'msw'

import { GetDailyTurnoverMetricsResponse } from '../get-daily-turnorver'

export const getDailyTurnoverMetricsMock = http.get<
  never,
  never,
  GetDailyTurnoverMetricsResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '30/08/2014', receipt: 44.21 },
    { date: '29/08/2014', receipt: 100 },
    { date: '28/08/2014', receipt: 92.01 },
    { date: '27/08/2014', receipt: 222.44 },
    { date: '26/08/2014', receipt: 213.01 },
    { date: '25/08/2014', receipt: 140.09 },
    { date: '24/08/2014', receipt: 199.99 },
  ])
})
