import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'
describe('Order status', () => {
  it('should display the pending status component when status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Pending')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the canceled status component when status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Canceled')
    // console.log(statusText.outerHTML)
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
})
