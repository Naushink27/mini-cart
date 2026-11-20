# Test Results – Mini Checkout and Browser Test Suite

## 1. Test Execution Summary

| Metric | Result |
|---|---|
| Total test scenarios | 6 |
| Passed | 6 |
| Failed | 0 |
| Overall status | PASS |

## 2. Automated Test Results

| Test ID | Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| TC-01 | Successful checkout | Order confirmation and reference should be displayed | Order confirmation and reference displayed successfully | PASS |
| TC-02 | Missing customer name | Checkout should be blocked with a validation message | Validation message displayed and checkout blocked | PASS |
| TC-03 | Quantity change | Line total and order total should update correctly | Both totals displayed ₹4,500 for quantity 3 | PASS |

## 3. Manual Test Results

| Test ID | Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| MT-01 | Checkout with empty cart | Checkout should be blocked and an error displayed | Error message displayed successfully | PASS |
| MT-02 | Rapid double-click on Place Order | Only one order confirmation should be generated | Only one order reference was generated | PASS |
| MT-03 | Input preservation after validation | User should be able to enter their name and complete checkout after validation | Name was entered successfully and checkout proceeded | PASS |

## 4. Defect Summary

No defects were observed during the executed automated and manual tests.

## 5. Conclusion

The Mini Checkout application successfully passed all three automated browser tests and all three manual test scenarios. The application correctly handles checkout validation, cart calculations, order confirmation, and duplicate-submission prevention.