let income = 1200000;
let saving = 20000;

import income_cal from "./tax_calculator.js";
test("test taxation", () => {
    expect(income_cal(income, saving)).toBe(359400);
});