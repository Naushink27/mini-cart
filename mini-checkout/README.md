# Mini Checkout and Browser Test Suite

## 1. Project Overview

Mini Checkout is a simple single-page checkout application developed using React and JavaScript. It allows users to browse products, add items to a shopping cart, modify quantities, and complete an order.

The application includes input validation, automatic price calculations, order confirmation, and protection against duplicate order submissions.

## 2. Features

- Display two synthetic products with fixed prices.
- Add products to the shopping cart.
- Increase or decrease product quantities.
- Remove products from the cart.
- Automatically calculate line totals and the overall order total.
- Validate the required customer name field.
- Prevent checkout when the cart is empty.
- Display an order confirmation with a unique reference.
- Prevent duplicate order submissions caused by rapid clicks.

## 3. Technologies Used

- React.js
- JavaScript
- CSS
- Vite
- Playwright
- Node.js and npm

## 4. Project Structure

```text
mini-checkout/
│
├── docs/
│   ├── TEST_PLAN.md
│   └── TEST_RESULTS.md
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── tests/
│   └── checkout.spec.js
│
├── index.html
├── package.json
├── playwright.config.js
└── README.md
```

## 5. Installation and Setup

### Prerequisites

- Node.js installed
- npm installed

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Install Playwright browser

```bash
npx playwright install chromium
```

## 6. Running the Application

Start the development server using:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

## 7. Running Automated Tests

Execute the Playwright test suite using:

```bash
npx playwright test
```

To view detailed test output:

```bash
npx playwright test --reporter=list
```

To view the HTML test report:

```bash
npx playwright show-report
```

## 8. Testing Documentation

The project includes the following testing documents:

- **docs/TEST_PLAN.md:** Describes testing objectives, scope, risk priorities, and test scenarios.
- **docs/TEST_RESULTS.md:** Contains the automated and manual test execution results.

## 9. Limitations

- The application uses synthetic products and fixed prices.
- No backend or database is connected.
- No real payment processing is implemented.
- Order confirmation is generated locally within the application.

## 10. Conclusion

The Mini Checkout application demonstrates essential checkout functionality and browser automation using Playwright. It has been tested for successful checkout, input validation, accurate quantity-based calculations, empty-cart handling, and duplicate-submission prevention.