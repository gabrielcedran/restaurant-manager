import { expect, test } from '@playwright/test'

test('list orders sucessfully', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'customer-1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customer-10', exact: true }),
  ).toBeVisible()
})

test('pagination works', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Next page' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-11', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customer-20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Last page' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-51', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customer-60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Previous page' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-41', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customer-50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'First page' }).click()

  await expect(
    page.getByRole('cell', { name: 'customer-1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customer-10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Order id').fill('order-12')
  await page.getByRole('button', { name: 'Filter', exact: true }).click()

  await expect(page.getByRole('cell', { name: 'order-12' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Customer name').fill('customer-12')
  await page.getByRole('button', { name: 'Filter', exact: true }).click()

  await expect(page.getByRole('cell', { name: 'order-12' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pending').click()
  await page.getByRole('button', { name: 'Filter', exact: true }).click()

  const tableRows = await page.getByRole('cell', { name: 'Pending' }).all()
  expect(tableRows).toHaveLength(10)
})
