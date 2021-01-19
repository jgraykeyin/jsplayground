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

    // Calculate the subtotal 
    let subtotal = snuggly_total + shipping_cost;

    // Displaying values to make sure things are working so far...
    console.log(shipping_cost);
    console.log(snuggly_total);
    console.log(subtotal);
}

