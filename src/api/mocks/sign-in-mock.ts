import { http, HttpResponse } from 'msw'

import { SignInRequest } from '../sign-in'

export const signInMock = http.post<never, SignInRequest>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'don@bob.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
