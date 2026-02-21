// global variable for scores
let humanScore = 0;
let computerScore = 0;

// returns the computer's choice
function getComputerChoice() {
  let computerDraw = Math.floor(Math.random() * 3);
  if (computerDraw === 0) {
    computerDraw = "rock";
  } else if (computerDraw === 1) {
    computerDraw = "paper";
  } else {
    computerDraw = "scissors";
  }
  return computerDraw;
}

// returns the human's choice
function getHumanChoice() {
  let humanDraw = window.prompt("Enter rock, paper, or scissors:");
  return humanDraw.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scsissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice);
  } else {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// testing
console.log(getHumanChoice());
