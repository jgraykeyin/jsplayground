console.log("Top Secret Van Tracker");

function getFormData() {
    let track_vans = true;
    let license_plate = document.getElementById("license_plate").value;
    let vin_number = document.getElementById("vin_number").value;
    let company = document.getElementById("company").value;
    let model = document.getElementById("model").value;
    let cargo = document.getElementById("cargo").value;
    
    let vehicle_info = [];

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

    console.table(vehicle_info);
}

