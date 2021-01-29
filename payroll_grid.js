function main_payroll() {
    /* Give our buttons an onclick action so they will run a function when it's clicked */
    
    /* Make Calculate button run the calculate function */
    let btn_calc = document.querySelector("#btn_calc");
    btn_calc.onclick = calculate_payroll;

    /* Make the Clear button run the clear function */
    let btn_clear = document.querySelector("#btn_clear");
    btn_clear.onclick = clear_fields;
}

function clear_fields() {
    document.querySelector("#emp_num").value = "";
    document.querySelector("#emp_name").value = "";
    document.querySelector("#monday_sales").value = "";
    document.querySelector("#tuesday_sales").value = "";
    document.querySelector("#wednesday_sales").value = "";
    document.querySelector("#thursday_sales").value = "";
    document.querySelector("#friday_sales").value = "";

    document.querySelector("#total_sales").innerHTML = "$0.00";
    document.querySelector("#commission").innerHTML = "$0.00";
    document.querySelector("#base_salary").innerHTML = "$0.00";
    document.querySelector("#gross_pay").innerHTML = "$0.00";
    document.querySelector("#income_tax").innerHTML = "$0.00";
    document.querySelector("#net_pay").innerHTML = "$0.00";
}

function calculate_payroll() {
    /* This code will run when the Calculate button has been clicked */
    /* First we'll get all the values from the input boxes */
    let emp_num = document.querySelector("#emp_num").value;
    let emp_name = document.querySelector("#emp_name").value;
    let monday = parseFloat(document.querySelector("#monday_sales").value);
    let tuesday = parseFloat(document.querySelector("#tuesday_sales").value);
    let wednesday = parseFloat(document.querySelector("#wednesday_sales").value);
    let thursday = parseFloat(document.querySelector("#thursday_sales").value);
    let friday = parseFloat(document.querySelector("#friday_sales").value);

    /* Creating an object of all the daily sales values so I can loop through 
    each value and check if they're all numbers for validation */
    dayList = {
        "Monday":monday,
        "Tuesday":tuesday,
        "Wednesday":wednesday,
        "Thursday":thursday,
        "Friday":friday
    }

    /* If any of the values in our object is not a number, we'll prompt for a valid number */
    for (const [key, value] of Object.entries(dayList)) {
        console.log(`${key}: ${value}`);
        while (isNaN(dayList[key])) {
            new_value = parseFloat(prompt(`Please enter a valid number for ${key}`));
            dayList[key] = new_value
            document.querySelector(`#${key.toLowerCase()}`).value = new_value;            
        }
    }

    /* Now that we have all real numbers, we can add them up to get a total sales */
    let total_sales = dayList["Monday"] + dayList["Tuesday"] + dayList["Wednesday"] + dayList["Thursday"] + dayList["Friday"];

    let commission = total_sales * 0.15;

    let base_salary = 0;
    if (total_sales < 1000) {
        base_salary = 660;
    } else {
        base_salary = 740;
    }

    let gross_pay = commission + base_salary;
    let income_tax = gross_pay * 0.21;
    let net_pay = gross_pay - income_tax;

    // Now we can output all our values into the desired locations
    document.querySelector("#total_sales").innerHTML = `$${total_sales.toFixed(2)}`;
    document.querySelector("#commission").innerHTML = `$${commission.toFixed(2)}`;
    document.querySelector("#base_salary").innerHTML = `$${base_salary.toFixed(2)}`;
    document.querySelector("#gross_pay").innerHTML = `$${gross_pay.toFixed(2)}`;
    document.querySelector("#income_tax").innerHTML = `$${income_tax.toFixed(2)}`;
    document.querySelector("#net_pay").innerHTML = `$${net_pay.toFixed(2)}`;

}


/* Run the main_payroll function when the page has loaded */
window.onload = main_payroll;
