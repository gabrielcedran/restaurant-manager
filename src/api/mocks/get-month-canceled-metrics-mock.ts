import { http, HttpResponse } from 'msw'

import { GetMonthCanceledMetricsResponse } from '../get-month-canceled-metrics'

export const getMonthCanceledOrdersMetricsMock = http.get<
  never,
  never,
  GetMonthCanceledMetricsResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -2,
  })
})
