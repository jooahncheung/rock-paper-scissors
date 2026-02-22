const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResults = document.querySelector("#round-results");
const btnChoices = document.querySelectorAll(".btn-choice");
const resetBtn = document.querySelector("#reset-btn");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `🤝 It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    humanScoreDisplay.textContent = humanScore;
    resultMessage = `✅ You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultMessage = `❌ You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  roundResults.textContent = resultMessage;

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function announceWinner() {
  const winner = humanScore === 5 ? "YOU" : "THE COMPUTER";
  roundResults.innerHTML = `<strong style="color: #4caf50">GAME OVER: ${winner} WINS THE MATCH!</strong>`;

  btnChoices.forEach((btn) => (btn.disabled = true));
  resetBtn.classList.remove("hidden");
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  roundResults.textContent = "Select a move to begin!";
  btnChoices.forEach((btn) => (btn.disabled = false));
  resetBtn.classList.add("hidden");
}

// Event Listeners
btnChoices.forEach((btn) => {
  btn.addEventListener("click", () => playRound(btn.id));
});

resetBtn.addEventListener("click", resetGame);
