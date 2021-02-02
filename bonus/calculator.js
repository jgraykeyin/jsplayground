function main() {
    console.log("Hey dude");
    setButtonListeners();
}

function buttonClickAction(n) {
    console.log(`${n} clicked`);
    let output_window = document.querySelector(".output");
    output_window.innerHTML = n;
}

function setButtonListeners() {

    // Looping through numbers 0 to 9 will let us set an event listener to each button
    x=0;
    while (x < 10) {
        let btn = document.querySelector(`#btn-${x}`);
        btn.addEventListener("click", function() {
            buttonClickAction(btn.value);
        });
        x+=1;
    }
    
}

window.addEventListener("load", main);