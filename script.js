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
  return humanDraw ? humanDraw.toLowerCase() : "";
}

// play round logic
function playRound(humanChoice, computerChoice) {
  if (!humanChoice) return;

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

// plays five rounds
function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    // We get FRESH choices every time the loop runs
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // We call the function with parentheses and arguments
    playRound(humanSelection, computerSelection);
  }

  console.log("--- GAME OVER ---");
  console.log(
    `Final Result - Human: ${humanScore} | Computer: ${computerScore}`,
  );
}

// calling the game
playGame();
