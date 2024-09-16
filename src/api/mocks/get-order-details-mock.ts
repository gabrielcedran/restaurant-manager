import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'BOb DOn',
      email: 'bob@don.com',
      phone: '0294676757',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 12244,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2239,
        quantity: 2,
        product: { name: 'Pepperoni Pizza' },
      },
      {
        id: 'order-item-2',
        priceInCents: 6539,
        quantity: 1,
        product: { name: 'Marinara Pizza' },
      },
    ],
  })
})
