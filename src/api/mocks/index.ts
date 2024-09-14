import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { createRestaurantMock } from './create-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, createRestaurantMock)

export async function enableMSW() {
  if (env.MODE === 'mocked') {
    await worker.start()
  }
}
