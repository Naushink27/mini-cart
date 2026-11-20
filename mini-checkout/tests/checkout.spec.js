
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// TC-01: Successful checkout
test('should complete checkout successfully', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  await page.getByLabel('Customer Name').fill('Naushin');

  await page.getByRole('button', { name: 'Place Order' }).click();

  await expect(page.getByRole('status')).toContainText('Order Confirmed!');

  await expect(page.getByText(/ORD-\d+/)).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Order Placed' })
  ).toBeDisabled();
});

// TC-02: Missing customer name
test('should block checkout when customer name is missing', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  await page.getByRole('button', { name: 'Place Order' }).click();

  await expect(page.getByRole('alert')).toHaveText('Please enter your name.');

  await expect(page.getByRole('status')).not.toBeVisible();

  await expect(page.locator('.cart-item')).toHaveCount(1);
});

// TC-03: Quantity change updates exact total
test('should calculate the correct total after quantity change', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  await page.getByRole('button', { name: 'Increase quantity' }).click();
  await page.getByRole('button', { name: 'Increase quantity' }).click();

  await expect(page.locator('.cart-item')).toContainText('Line Total: ₹4,500');

  await expect(page.locator('.total')).toContainText('₹4,500');
});
