console.log("The Snuggly Copmany");

function getFormData() {

    let customer_name = document.getElementById("customer_name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let postalcode = document.getElementById("postalcode").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let creditcard = document.getElementById("creditcard").value;
    let snuggly_num = document.getElementById("snuggly_num").value;

    // Setting the price for a single snuggly
    let snuggly_price = 29.99;

    // Set new prices based on the amount of snugglies ordered
    if (snuggly_num > 1 && snuggly_num <= 10) {
        snuggly_price = 24.99;
    } else if (snuggly_num > 10) {
        snuggly_price = 21.99;
    }

    // Calculate the total cost of snugglies
    let snuggly_total = snuggly_price * snuggly_num;

    // Set the base shipping cost
    let shipping_per_unit = 5.99;
    
    // Set the shipping cost per-unit based on the amount ordered
    if (snuggly_num >= 6) {
        shipping_per_unit = 3.99;
    }

    // Calculate the shipping cost
    let shipping_cost = shipping_per_unit * snuggly_num;

    // Calculate the subtotal, taxes and total 
    let subtotal = snuggly_total + shipping_cost;
    let sales_tax = 0.15 * subtotal;
    let total = subtotal + sales_tax;

    // Calculate the credit card fee
    let cc_fee = 0.03 * total;


    // Display all the inputs and calculations
    console.log("Customer name: " + customer_name);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("Province: " + province);
    console.log("Postal Code: " + postalcode);
    console.log("Phone Number: " + phonenumber);
    console.log("Credit Card #: " + creditcard);
    console.log("Snugglies Ordered: " + snuggly_num);

    // Making sure each number is limited to two numbers after the decimal by using the toFixed() function
    console.log("Snuggly Price: $" + snuggly_price.toFixed(2));
    console.log("Snuggly Total: $" + snuggly_total.toFixed(2));
    console.log("Shipping: $" + shipping_cost.toFixed(2));
    console.log("Subtotal: $" + subtotal.toFixed(2));
    console.log("Total Order Cost: $" + total.toFixed(2));
    console.log("Credit card company fee: $" + cc_fee.toFixed(2));
    
}

