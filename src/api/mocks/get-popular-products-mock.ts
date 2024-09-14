import { http, HttpResponse } from 'msw'

import { GetPopularProductsMetricsResponse } from '../get-popular-products'

export const getPopularProductsMetricsMock = http.get<
  never,
  never,
  GetPopularProductsMetricsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pepperoni Pizza', amount: 10 },
    { product: 'Margherita Pizza', amount: 7 },
    { product: 'Caesar Salad', amount: 15 },
    { product: 'Tunna Pizza', amount: 6 },
  ])
})
