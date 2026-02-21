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

console.log(getHumanChoice());
