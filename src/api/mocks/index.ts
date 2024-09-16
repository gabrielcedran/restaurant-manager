import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { createRestaurantMock } from './create-restaurant-mock'
import { getDailyTurnoverMetricsMock } from './get-daily-turnover-mock'
import { getDayOrdersMetricsMock } from './get-day-orders-metrics-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant.mock'
import { getMonthCanceledOrdersMetricsMock } from './get-month-canceled-metrics-mock'
import { getMonthOrdersMetricsMock } from './get-month-orders-metrics-mock'
import { getMonthTurnoverMetricsMock } from './get-month-turnover-metrics-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMetricsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  createRestaurantMock,
  getDayOrdersMetricsMock,
  getMonthOrdersMetricsMock,
  getMonthCanceledOrdersMetricsMock,
  getMonthTurnoverMetricsMock,
  getDailyTurnoverMetricsMock,
  getPopularProductsMetricsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
)

export async function enableMSW() {
  if (env.MODE === 'mocked') {
    await worker.start()
  }
}
