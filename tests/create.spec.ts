import { expect, test } from '@playwright/test';

const todoUrl = 'https://demo.playwright.dev/todomvc/';

test.beforeEach(async ({ page }) => {
  await page.goto(todoUrl);
  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
});

test('creates one todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Write CI documentation');
  await input.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveText('Write CI documentation');
  await expect(page.locator('.todo-count')).toContainText('1 item left');
});

test('keeps new todos in order', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Run create suite');
  await input.press('Enter');
  await input.fill('Run filter suite');
  await input.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveText([
    'Run create suite',
    'Run filter suite',
  ]);
});

test('clears the input after adding a todo and can demonstrate CI failure', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Inspect Playwright trace');
  await input.press('Enter');

  await expect(input).toBeEmpty();
  await expect(page.locator('.todo-list li')).toHaveCount(
    process.env.DEMO_FAIL === 'true' ? 2 : 1,
  );
});
