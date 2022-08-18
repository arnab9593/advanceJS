function income_cal(income, saving) {
    let deduct;
    if (income < 500000) {
        income = income - (saving * 0.5);
    }
    else if (income < 1000000) {
        income = income - (saving * 0.3);
    }
    else if (income > 1000000) {
        deduct = saving * 0.1;
        if (deduct > 50000) {
            income = income - 50000;
        }
        else {
            income = income - deduct;
        }
    }

    return tax_cal(income);
}




function tax_cal(income) {
    let tax;
    if (income < 250000) {
        tax = 0;
        return tax;
    }
    else if (income >= 250000 && income < 500000) {
        tax = (income * 0.1);
        return tax;
    }
    else if (income >= 500000 && income < 1000000) {
        tax = income * 0.2;
        return tax;
    }
    else if (income > 1000000) {
        tax = income * 0.3;
        return tax;
    }
}

export default income_cal;