import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email Address').fill('don@bob.com')
  await page.getByRole('button', { name: 'Log in' }).click()

  const toast = page.getByText(
    'A magic link has been sent to your email to complete the login.',
  )

  await expect(toast).toBeVisible()

  // hack to wait for last frame to be rendered no the ui recorder - bug of the last step
  // await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Email Address').fill('bob@don.com')
  await page.getByRole('button', { name: 'Log in' }).click()

  const toast = page.getByText('Invalid credentials.')

  expect(toast).toBeVisible()
})

test('navigate to restaurant sign up page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New Restaurant' }).click()

  expect(page.url()).toContain('/sign-up')
  expect(page.getByText('Create a new restaurantCreate')).toBeVisible()
})
