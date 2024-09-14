import { http, HttpResponse } from 'msw'

import { GetMonthTurnoverMetricsResponse } from '../get-month-turnover-metrics'

export const getMonthTurnoverMetricsMock = http.get<
  never,
  never,
  GetMonthTurnoverMetricsResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 1442.01,
    diffFromLastMonth: 23.0,
  })
})
