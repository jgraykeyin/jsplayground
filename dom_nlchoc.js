function getFormData() {
    // This function is triggered by the button in our html document.

    // Get the values from all the inputs
    let emp_number = document.getElementById("emp_number").value;
    let emp_name = document.getElementById("emp_name").value;
    let location = document.getElementById("location").value;
    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
    let number_days = document.getElementById("number_days").value;
    let car_status = document.getElementById("car_status").value;

    // Just print it back to the console for now
    console.log(emp_number);
    console.log(emp_name);
    console.log(location);
    console.log(start_date);
    console.log(end_date);
    console.log(number_days);
    console.log(car_status);
}



