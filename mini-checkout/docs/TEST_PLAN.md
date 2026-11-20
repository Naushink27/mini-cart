# Test Plan – Mini Checkout and Browser Test Suite

## 1. Objective
The objective of testing is to verify that the checkout application correctly manages products, quantities, order totals, customer validation, and order confirmation.

## 2. Scope
Testing covers:
- Adding products to the cart.
- Updating product quantities and calculating totals.
- Removing products from the cart.
- Validating required customer information.
- Preventing checkout with an empty cart.
- Preventing duplicate order submissions.
- Displaying successful order confirmation.

## 3. Risk-Prioritized Test Scenarios

| Priority | Test Scenario | Risk |
|---|---|---|
| High | Checkout with valid information | Orders may fail to complete |
| High | Checkout with an empty cart | Invalid orders may be created |
| High | Missing required customer name | Incomplete orders may be accepted |
| High | Rapid double-click on Place Order | Duplicate confirmations may occur |
| Medium | Increase or decrease quantity | Incorrect quantities or totals |
| Medium | Remove a cart item | Cart may display incorrect information |
| Medium | Preserve customer input after validation | User-entered information may be lost |

## 4. Testing Approach
- Automated browser testing using Playwright.
- Manual functional testing for empty-cart validation and rapid double-click protection.
- Verification of displayed totals and confirmation messages.
- Independent test execution using fresh browser pages.