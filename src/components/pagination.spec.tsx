import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    // as this is a global variable, the calls to the mock is kept between tests
    // what could cause side-effect between them. So it's good to clear the mock before each test
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        totalCount={111}
        pageSize={10}
        pageIndex={0}
        onPageChange={onPageChangeCallback}
      />,
    )

    expect(wrapper.getByText('Page 1 of 12')).toBeInTheDocument()
    expect(wrapper.getByText('111 items')).toBeInTheDocument()
    expect(wrapper.getByRole('button', { name: 'First page' })).toBeDisabled()
  })

  it('should be possible to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        totalCount={111}
        pageSize={10}
        pageIndex={0}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Next page' })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be possible to navigate to the previous page', async () => {
    const wrapper = render(
      <Pagination
        totalCount={111}
        pageSize={10}
        pageIndex={5}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Previous page',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be possible to navigate to the last page', async () => {
    const wrapper = render(
      <Pagination
        totalCount={111}
        pageSize={10}
        pageIndex={5}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Last page',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(11)
  })

  it('should be possible to navigate to the first page', async () => {
    const wrapper = render(
      <Pagination
        totalCount={111}
        pageSize={10}
        pageIndex={5}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'First page',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })
})
