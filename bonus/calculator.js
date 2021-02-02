function main() {
    console.log("Hey dude");
    setButtonListeners();
    localStorage.setItem("equation_done",false);

}

function calculateDivide(html) {
    let values = html.split("/");

    let quotient = parseFloat(values[0]) / parseFloat(values[1]);

    let output_window = document.querySelector(".output");
    output_window.innerHTML = output_window.innerHTML + "=" + quotient; 
}

function calculateMultiply(html) {
    let values = html.split("*");

    let result = parseFloat(values[0]) * parseFloat(values[1]);

    let output_window = document.querySelector(".output");
    output_window.innerHTML = output_window.innerHTML + "=" + result;
}

function calculateDiff(html) {
    let values = html.split("-");

    let diff = parseFloat(values[0]) - parseFloat(values[1]);

    let output_window = document.querySelector(".output");
    output_window.innerHTML = output_window.innerHTML + "=" + diff;
}

function calculateSum(html) {
    // This should break apart an equation if it's just an addition
    let values = html.split("+");
    
    let sum = parseFloat(values[0]) + parseFloat(values[1]);

    let output_window = document.querySelector(".output");
    output_window.innerHTML = output_window.innerHTML + "=" + sum;
}

function buttonClickAction(n) {
    console.log(`${n} clicked`);

    let output_window = document.querySelector(".output");

    if (n == "ce") {
        output_window.innerHTML = "0";
    } else if (n == "+") {
        // Using localStorage to save the currently selected operator
        localStorage.setItem("op_selected", n);
        output_window.innerHTML = output_window.innerHTML + n;
    } else if (n == "-") {
        localStorage.setItem("op_selected", n);
        output_window.innerHTML = output_window.innerHTML + n;
    } else if (n == "*") {
        localStorage.setItem("op_selected", n);
        output_window.innerHTML = output_window.innerHTML + n;
    } else if (n == "/") {
        localStorage.setItem("op_selected", n);
        output_window.innerHTML = output_window.innerHTML + n;
    } else if (n == "=") {

        // Check the localStorage op_selected to see which operator was selected
        let op_selected = localStorage.getItem("op_selected");
        if (op_selected == "+") {
            calculateSum(output_window.innerHTML);
        } else if (op_selected == "-") {
            calculateDiff(output_window.innerHTML);
        } else if (op_selected == "*") {
            calculateMultiply(output_window.innerHTML);
        } else if (op_selected == "/") {
            calculateDivide(output_window.innerHTML);
        }

        localStorage.setItem("equation_done",1);

    } else {

        if (output_window.innerHTML == "0") {
            output_window.innerHTML = n;

        } else {

            let screen_state = localStorage.getItem("equation_done");
            console.log(screen_state);
            if (screen_state == 1) {
                console.log("Fizz");
                output_window.innerHTML = n;
                localStorage.setItem("equation_done",0);
            } else {
                console.log("Buzz");
                output_window.innerHTML = output_window.innerHTML + n;
            }
        }
    }
}

function setButtonListeners() {

    // Looping through numbers 0 to 9 will let us set an event listener to each button
    let x=0;
    while (x < 10) {
        let btn = document.querySelector(`#btn-${x}`);
        btn.addEventListener("click", function() {
            buttonClickAction(btn.value);
        });
        x+=1;
    }

    // The operators aren't named with numbers so I'm creating an array to hold all their IDs
    let calc_ops = ["op-dot","op-plus","op-minus","op-multiply","op-divide","op-equals","op-ce"];
    let i=0;
    while (i < 7) {
        let btn = document.querySelector(`#${calc_ops[i]}`);
        btn.addEventListener("click",function() {
            buttonClickAction(btn.value);
        });
        i+=1;
    }
}

window.addEventListener("load", main);