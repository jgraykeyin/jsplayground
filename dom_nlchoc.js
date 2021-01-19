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

    let total_km = 0;
    if (car_status.toUpperCase() == "O") {
        total_km = prompt("Total kilometers: ");
    }
    
    // Calculate the per diem based on the number of days of the trip
    let perdiem = Number;
    if (number_days <= 3) {
        perdiem = number_days * 85;
    } else {
        perdiem = number_days * 100;
    }
    
    // Calculate the mileage based on if the car is rented or owned
    let mileage = Number;
    if (car_status == "O") {
        mileage = total_km * 0.10;
    } else if (car_status == "R") {
        mileage = number_days * 56;
    }
    
    // Calculate the claim amount, taxes and totals
    let claim_amount = perdiem + mileage;
    let hst = claim_amount * 0.13;
    let claim_total = claim_amount + hst;
    
    // Print the output!
    console.log(`Employee Number: ${emp_number}`);
    console.log(`Employee Name: ${emp_name}`);
    console.log(`Trip Location: ${location}`);
    console.log(`Start Date: ${start_date}`);
    console.log(`End Date: ${end_date}`);
    console.log(`Number of days: ${number_days}`);
    console.log(`Car Status: ${car_status}`);
    console.log(`Per Diem: \$${perdiem}`);
    console.log(`Mileage: ${mileage} km`);
    console.log(`Claim Amount: \$${claim_amount}`);
    console.log(`Taxes: \$${hst}`);
    console.log(`Claim Total: \$${claim_total}`);
    
}



