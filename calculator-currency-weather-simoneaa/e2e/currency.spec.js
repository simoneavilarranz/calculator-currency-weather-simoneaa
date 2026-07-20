import { test, expect } from '@playwright/test'

test.describe('Currency Converter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.click('button:has-text("Currency")')
  })

  test('should fill amount and select currencies', async ({ page }) => {
    const amountInput = page.locator('input:visible')
    await amountInput.fill('100')

    const fromSelect = page.locator('select:visible').first()
    const toSelect = page.locator('select:visible').last()
    await fromSelect.selectOption('USD')
    await toSelect.selectOption('EUR')

    await expect(amountInput).toHaveValue('100')
  })

  test('should click convert button', async ({ page }) => {
    const amountInput = page.locator('input:visible')
    await amountInput.fill('50')

    const fromSelect = page.locator('select:visible').first()
    const toSelect = page.locator('select:visible').last()
    await fromSelect.selectOption('EUR')
    await toSelect.selectOption('USD')

    await page.click('button:has-text("Convert")')

    const resultDiv = page.locator('div:has-text("USD")').last()
    await expect(resultDiv).not.toHaveText('0.00 USD')
  })
})
