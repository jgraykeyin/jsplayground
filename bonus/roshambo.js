function main() {
    // Set the button to run the play_game function when clicked
    let btn_play = document.querySelector("#btn_play")
    btn_play.onclick = play_game;
}

function play_game() {

    // Get the user-selected action
    let player_move = document.querySelector("#player_action").value;

    // Create an array of possible actions
    let actions = ["rock","paper","scissor"];

    // Select a random action from the array
    let cpu_move = actions[Math.floor(Math.random() * actions.length)];

    // Get the current game score
    let player_score = parseInt(document.querySelector("#player_score").innerHTML);
    let cpu_score = parseInt(document.querySelector("#cpu_score").innerHTML);

    // Figure out who won, who lost or if it's a tie.
    // This can probably be improved with a function...or something.
    let status = "";
    if (player_move == cpu_move) {
        status = "TIE GAME!";
    } else {
        if (player_move == "rock") {
            if (cpu_move == "paper") {
                status = "CPU WINS!";
                cpu_score+=1;
            } else if (cpu_move == "scissor") {
                status = "PLAYER WINS!";
                player_score+=1;
            }
        } else if (player_move == "paper") {
            if (cpu_move == "rock") {
                status = "PLAYER WINS";
                player_score+=1;
            } else if (cpu_move == "scissor") {
                status = "CPU WINS";
                cpu_score+=1;
            }
        } else if (player_move == "scissor") {
            if (cpu_move == "rock") {
                status = "CPU WINS!";
                cpu_score+=1;
            } else if (cpu_move = "paper") {
                status = "PLAYER WINS!"
                player_score+=1;
            }
        }
    }

    // Create a variable that contains our results in the form of HTML
    let html = `<h2>Player's move: ${player_move}</h2>
                <h2>CPU's move: ${cpu_move}</h2>
                <h1>${status}</h1>`;

    // Insert our new HTML code into the content tag of our document
    document.querySelector("#results").innerHTML = html;

    // Now we update the score in our document
    document.querySelector("#player_score").innerHTML = player_score;
    document.querySelector("#cpu_score").innerHTML = cpu_score;

}

window.onload = main;