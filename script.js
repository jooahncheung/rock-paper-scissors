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

function getHumanChoice() {
  let humanDraw = window.prompt("What do you draw?").toLowerCase();
  return humanDraw;
}
console.log(getHumanChoice());
