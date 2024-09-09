import { api } from '@/lib/axios'

export interface CompleteOrderParams {
  orderId: string
}

export async function completeOrder({ orderId }: CompleteOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
