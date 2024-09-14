import { http, HttpResponse } from 'msw'

import { UpdateProfileRequest } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileRequest>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Don Bon Pizza Shop') {
      return new HttpResponse(null, { status: 200 })
    }

    return new HttpResponse(null, { status: 409 })
  },
)
