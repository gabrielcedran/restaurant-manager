import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant Name').fill('Don Bob Diner')
  await page.getByLabel('Your name').fill('Don Bob')
  await page.getByLabel('Phone').fill('38712741')
  await page.getByLabel('Email').fill('don.bob@diner.shop')

  await page.getByRole('button', { name: 'Sign up' }).click()

  const toast = page.getByText('Sign up completed successfully')
  expect(toast).toBeVisible()

  // hack to wait for last frame to be rendered no the ui recorder - bug of the last step
  // await page.waitForTimeout(2000)
})

test('sign up with invalid data', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant Name').fill('Invalid Name')
  await page.getByLabel('Your name').fill('Don Bob')
  await page.getByLabel('Phone').fill('38712741')
  await page.getByLabel('Email').fill('don.bob@diner.shop')

  await page.getByRole('button', { name: 'Sign up' }).click()

  const toast = page.getByText(
    'Something unexpected happened while registering. Please try again.',
  )
  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Already have an account?' }).click()

  expect(page.url()).toContain('/sign-in')
})
