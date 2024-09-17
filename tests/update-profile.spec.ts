import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Don and Bob Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Restaurant Profile' }).click()

  await page.getByLabel('Name').fill('Don Bob Pizza Shop')
  await page.getByLabel('Description').fill('another description')

  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Profile updated successfully')
  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(
    page.getByRole('button', { name: 'Don Bob Pizza Shop' }),
  ).toBeVisible({ timeout: 1000 })

  //   await page.waitForTimeout(2000)
})
