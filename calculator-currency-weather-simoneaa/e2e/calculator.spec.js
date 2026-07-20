import { test, expect } from '@playwright/test'

test.describe('Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('should sum two numbers correctly', async ({ page }) => {
    await page.click('button:has-text("2")')
    await page.click('button:has-text("+")')
    await page.click('button:has-text("3")')
    await page.click('button:has-text("=")')

    const display = page.locator('input').first()
    await expect(display).toHaveValue('5')
  })

  test('should show Error when dividing by zero', async ({ page }) => {
    await page.click('button:has-text("8")')
    await page.click('button:has-text("/")')
    await page.click('button:has-text("0")')
    await page.click('button:has-text("=")')

    const display = page.locator('input').first()
    await expect(display).toHaveValue('Error')
  })

  test('should clear display with CE', async ({ page }) => {
    await page.click('button:has-text("9")')
    await page.click('button:has-text("CE")')

    const display = page.locator('input').first()
    await expect(display).toHaveValue('0')
  })
})
