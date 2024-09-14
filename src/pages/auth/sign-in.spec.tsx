import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if email is on search params', () => {
    const page = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=don@bob.com']}>
            <QueryClientProvider client={queryClient}>
              <HelmetProvider>{children}</HelmetProvider>
            </QueryClientProvider>
          </MemoryRouter>
        )
      },
    })

    page.debug()

    // getByLabelText allows inputs to be found by their corresponding label text, which in turn must have the `for` attribute properly set
    const emailInput = page.getByLabelText('Email Address') // as HTMLInputElement
    // console.log(emailInput.outerHTML)

    expect(emailInput).toHaveValue('don@bob.com')
  })
})
