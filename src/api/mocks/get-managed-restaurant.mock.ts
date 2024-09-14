import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Don and Bob Pizza Shop',
    description: 'Neapolitan Pizza Restaurant',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
