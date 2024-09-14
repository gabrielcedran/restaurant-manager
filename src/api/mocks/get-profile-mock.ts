import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Don Bob',
      email: 'don@bob.com',
      phone: '0178656165',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
