function getFormData() {
    // This function is triggered by the button in our html document.
    // Right now it just grabs a single value from an input but
    // we can add all other inputs in the function too.

    // Get the value from the html element with id emp_number
    let emp_number = document.getElementById("emp_number").value;

    // Just print it back to the console for now
    console.log(emp_number);
}



