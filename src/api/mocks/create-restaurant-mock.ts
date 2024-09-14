import { http, HttpResponse } from 'msw'

import { CreateRestaurantRequest } from '../create-restaurant'

export const createRestaurantMock = http.post<never, CreateRestaurantRequest>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Don Bob Diner') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 409 })
  },
)
