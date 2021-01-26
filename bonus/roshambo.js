function main() {
    // Set the button to run the play_game function when clicked
    let btn_play = document.querySelector("#btn_play")
    btn_play.onclick = play_game;
}

function play_game() {

    // Create an array of possible actions
    let actions = ["rock","paper","scissor"];

    // Select a random action from the array
    let cpu_move = actions[Math.floor(Math.random() * actions.length)];
    console.log(cpu_move);


}


window.onload = main;