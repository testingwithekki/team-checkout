import { expect, test } from '@playwright/test';

test('adds an item to the cart', async ({ page }) => {
  await page.setContent(`
    <button id="add" onclick="document.querySelector('#count').textContent = '1'">Add</button>
    <span id="count">0</span>
  `);

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.locator('#count')).toHaveText('1');
});

test('accepts a demo coupon', async ({ page }) => {
  await page.setContent(`
    <input aria-label="Coupon" />
    <button onclick="document.querySelector('#result').textContent =
      document.querySelector('input').value === 'SAVE10' ? 'Applied' : 'Invalid'">Apply</button>
    <span id="result"></span>
  `);

  await page.getByRole('textbox', { name: 'Coupon' }).fill('SAVE10');
  await page.getByRole('button', { name: 'Apply' }).click();
  await expect(page.locator('#result')).toHaveText('Applied');
});

test('shows checkout status and can demonstrate a CI failure', async ({ page }) => {
  await page.setContent('<span id="status">Ready</span>');

  await expect(page.locator('#status')).toHaveText(
    process.env.DEMO_FAIL === 'true' ? 'Paid' : 'Ready',
  );
});
