import { http, HttpResponse } from 'msw'

import { GetDayOrdersMetricsResponse } from '../get-day-orders-metrics'

export const getDayOrdersMetricsMock = http.get<
  never,
  never,
  GetDayOrdersMetricsResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20.99,
    diffFromYesterday: -1.54,
  })
})
