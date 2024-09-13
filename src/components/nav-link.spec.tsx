import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when on page', () => {
    const page = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    // dataset is the javascript api to access/search data-[x] attributes - data-active in this case
    // keep in mind that html attributes are always string
    expect(page.getByText('About').dataset.active).toEqual('true')
    expect(page.getByText('Home').dataset.active).toEqual('false')
  })
})
