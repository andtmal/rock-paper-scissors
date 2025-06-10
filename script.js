let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

let totalRounds = 3;

const game = document.querySelector("#game");
const score = document.querySelector("#score");
const body = document.querySelector("body");

function appendResults(text, color) {
  const p = document.createElement("p");
  p.textContent = text;
  p.style.color = color;
  score.appendChild(p);
}

function createRefreshButton() {
  const button = document.createElement("button")
  const div = document.createElement("div");

  button.textContent = "Play again!"

  div.appendChild(button);
  body.appendChild(div);

  div.addEventListener("click", () => {
    location.reload();
  });
}

game.addEventListener("click", event => {

  if (!event.target.matches("button") || currentRound >= totalRounds) return;

  currentRound++;
  const humanChoice = event.target.id;
  const computerNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  const ComputerChoice = choices[computerNumber];

  const humanNumber = choices.indexOf(humanChoice);

  let outcome;
  let outcomeColor;
  if (humanNumber === computerNumber) {
      outcome = "It's a tie.";
      outcomeColor = "grey";
    }
    else if ((humanNumber + 2) % 3 === computerNumber) {
      humanScore++;
      outcome = "you win!";
      outcomeColor = "green";
    }
    else {
      computerScore++;
      outcome = "You lose.";
      outcomeColor = "red";
    }

  appendResults(
    `Round ${currentRound}/${totalRounds}: You chose ${humanChoice}, computer chose ${ComputerChoice}. ${outcome}`, outcomeColor
  );

  if (currentRound === totalRounds) {

    if (humanScore === computerScore) {
          outcome = " (It's a tie!)";
          outcomeColor = "grey";
        }
        else if (humanScore > computerScore) {
          outcome = " (You win the match!)";
          outcomeColor = "green";
        }
        else {
          outcome = " (You lose the match.)";
          outcomeColor = "red";
        }

    appendResults(
      `Final Score — You: ${humanScore}, Computer: ${computerScore}` + outcome, outcomeColor
    );

    createRefreshButton();
  }
});


