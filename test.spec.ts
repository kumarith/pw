import { test, expect } from '@playwright/test';

test(' Title Check - Test Case ', async ({ page }) => {
  await page.goto('https://nextjs.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/next\.js/i);

});



test('find button with name Learn and click', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Find the button with accessible name "Learn" and click it
  await page.getByRole('button', { name: 'Learn' }).click();

  // Add your expectation here, for example, check new URL or element
  await expect(page).toHaveURL(/.*learn/);
});