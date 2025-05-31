
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function playRound(humanchoice, computerchoice) {

      let humanselection = humanchoice;
      let computerselection = computerchoice;

      let winner = getRoundWinner(humanselection, computerselection);
      console.log("Winner of this round is: " + winner +"\n" + "Player's Choice: "+ humanselection +"\tComputer's Choice: " + computerselection);
    }

function getRoundWinner(human, computer) {
    if (human === computer) {
        return "Draw";
    }

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++;
        return "Player";
    } else {
        computerScore++;
        return "computer";
    }
}
function selectWinner() {
    if(humanScore > computerScore) {
        return "Player";
    } else if(computerScore > humanScore) {
        return "Computer";
    } else {
        return "Nobody.....Since match is tied";
    }
}


function gameController() {
    for(let i = 1;i <= 5;i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Player's Score: " + humanScore + "\nComputer's Score: " + computerScore);
    console.log("Winner of this game: " + selectWinner());
} 

gameController();