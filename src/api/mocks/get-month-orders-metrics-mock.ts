import { http, HttpResponse } from 'msw'

import { GetMonthOrdersMetricsResponse } from '../get-month-orders-metrics'

export const getMonthOrdersMetricsMock = http.get<
  never,
  never,
  GetMonthOrdersMetricsResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 1033.84,
    diffFromLastMonth: 4.1,
  })
})
