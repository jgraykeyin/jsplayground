function main_payroll() {
    /* Give our Calculate button an onclick action so it will run a function when it's clicked */
    let btn_calc = document.querySelector("#btn_calc");
    btn_calc.onclick = calculate_payroll;
}

function calculate_payroll() {
    /* This code will run when the Calculate button has been clicked */
    /* First we'll get all the values from the input boxes */
    let emp_num = document.querySelector("#emp_num").value;
    let emp_name = document.querySelector("#emp_name").value;
    let monday = document.querySelector("#monday").value;
    let tuesday = document.querySelector("#tuesday").value;
    let wednesday = document.querySelector("#wednesday").value;
    let thursday = document.querySelector("#thursday").value;
    let friday = document.querySelector("#friday").value;

    

}


/* Run the main_payroll function when the page has loaded */
window.onload = main_payroll;
