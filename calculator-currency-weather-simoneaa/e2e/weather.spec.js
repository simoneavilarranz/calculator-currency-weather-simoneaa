import { test, expect } from '@playwright/test'

test.describe('Weather', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.click('button:has-text("Weather")')
  })

  test('should show Spain cities by default', async ({ page }) => {
    await page.waitForSelector('select:visible')
    const select = page.locator('select:visible')
    await expect(select).toBeVisible()
  })

  test('should switch to Asturias and show municipios', async ({ page }) => {
    await page.click('button:has-text("Asturias")')
    await page.waitForSelector('select:visible')
    const select = page.locator('select:visible')
    await expect(select).toBeVisible()
  })

  test('should show emoji for sky state', async ({ page }) => {
    await page.waitForSelector('select:visible')
    const emoji = page.locator('p.text-4xl')
    await expect(emoji).toBeVisible()
  })
})
