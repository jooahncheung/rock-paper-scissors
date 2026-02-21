// 1. SELECTING ELEMENTS: Grabbing the HTML pieces we need to update
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResults = document.querySelector("#round-results");

// Selecting the buttons
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// 2. GLOBAL VARIABLES: Keeping track of the score
let humanScore = 0;
let computerScore = 0;

// 3. COMPUTER LOGIC: Randomly picking a move
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 4. ROUND LOGIC: Comparing choices and updating the UI
function playRound(humanChoice, computerChoice) {
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    humanScoreDisplay.textContent = humanScore; // Update number in HTML
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore; // Update number in HTML
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update the <div id="round-results"> with the message
  roundResults.textContent = resultMessage;

  // Optional: Check for a winner at 5 points
  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

// 5. EVENT LISTENERS: Waiting for the user to click a button
btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () =>
  playRound("paper", getComputerChoice()),
);
btnScissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice()),
);

// 6. FINAL WINNER LOGIC
function announceWinner() {
  const winner = humanScore === 5 ? "You" : "The Computer";
  roundResults.innerHTML = `<strong>Game Over! ${winner} won the match!</strong>`;

  // Disable buttons so the game stops
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}
