import { expect, test } from '@playwright/test'

test('display today orders metrics successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20.99', { exact: true })).toBeVisible()
  await expect(page.getByText('--1.54% from yesterday')).toBeVisible()
  //   page.waitForTimeout(1000)
})

test('display month turnover metrics successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('£14.42', { exact: true })).toBeVisible()
  await expect(page.getByText('+23% from last month')).toBeVisible()
  //   page.waitForTimeout(1000)
})

test('display month orders metrics successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('1,033.84', { exact: true })).toBeVisible()
  await expect(page.getByText('+4.1% from last month')).toBeVisible()
  //   page.waitForTimeout(1000)
})

test('display month canceled orders metrics successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('--2% from last month')).toBeVisible()
  //   page.waitForTimeout(1000)
})
