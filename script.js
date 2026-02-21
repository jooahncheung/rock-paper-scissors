function getComputerChoice() {
  draw = Math.floor(Math.random() * 3);
  if (draw === 0) {
    draw = "rock";
  } else if (draw === 1) {
    draw = "paper";
  } else {
    draw = "scissors";
  }
  return draw;
}
