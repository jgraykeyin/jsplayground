// Import a nodejs module to allow user inputs in the console.
// To install this module use: npm install prompt-sync
const prompt = require('prompt-sync')();

console.log("Top Secret Van Tracker");

let track_vans = true;
let license_plate = String;
let vin_number = String;
let company = String;
let model = String;
let cargo = Number;
let tracking_status = String;
let vehicle_info = [];

while (track_vans == true) {

    license_plate = prompt("License plate: ");
    vin_number = prompt("VIN: ");
    company = prompt("Company: ");
    model = prompt("Model: ");
    cargo = prompt("Cargo capacity in cubic cm: ");

    // Append the vehicle info object with the new information from inputs
    vehicle_info.push({
        [license_plate] : {
            "license_plate:": license_plate,
            "VIN": vin_number,
            "Company": company,
            "Model": model,
            "Cargo_capacity": cargo
        }
    });

    tracking_status = prompt("Would you like to enter another vehicle? (Y or N) ");
    if (tracking_status.toUpperCase() == "N") {
        break
    }

}

console.log(vehicle_info);