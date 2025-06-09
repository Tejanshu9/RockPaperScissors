
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function disableButtons() {
    document.querySelectorAll('.header button').forEach(btn => {
        btn.disabled = true;
    });
}


function enableButtons() {
    document.querySelectorAll('.header button').forEach(btn => {
        btn.disabled = false;
    });
}




function playRound(humanchoice, computerchoice) {

      let humanselection = humanchoice;
      let computerselection = computerchoice;

      let winner = getRoundWinner(humanselection, computerselection);
      const results = document.querySelector('#results').textContent =
      `Winner of this round is: ${winner}
       Player's Choice: ${humanselection}
       Computer's Choice: ${computerselection}
       Player's Score: ${humanScore}
       Computer's Score: ${computerScore}`;

      if(humanScore >= 5 || computerScore >=5){
        selectWinner();
      }
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
    const winner = document.querySelector('#winner');

    if(humanScore > computerScore) {
        winner.textContent = "Game Over!!!  Winner:  Player";
    } else if(computerScore > humanScore) {
        winner.textContent = "Game Over!!!  Winner: Computer";
    } else {
        winner.textContent = "Game Over!!!  Draw"
    }
    disableButtons();
}

function gameController() {
    const results = document.querySelector('#results');

    document.querySelector('#rock').addEventListener('click',() => {
         playRound("rock", getComputerChoice());
    })

    document.querySelector('#paper').addEventListener('click',() => {
         playRound("paper", getComputerChoice());
    })

    document.querySelector('#scissors').addEventListener('click',() => {
         playRound("scissors", getComputerChoice());
    })
} 


document.querySelector('#play-again').addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    document.querySelector('#results').textContent = "";
    document.querySelector('#winner').textContent = "";
    enableButtons();
});
gameController();

      
