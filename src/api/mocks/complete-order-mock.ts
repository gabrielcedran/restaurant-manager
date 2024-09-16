import { http, HttpResponse } from 'msw'

import { ApproveOrderParams } from '../approve-order'

export const completeOrderMock = http.patch<ApproveOrderParams, never, never>(
  '/orders/:orderId/deliver',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 409 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
