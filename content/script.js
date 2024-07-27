let humanScore = 0;
let computerScore = 0;

const gameBoard = document.querySelector(".game-board");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const resetButtonJS = document.createElement("button");
const resetButtonHTML = document.querySelector(".reset-button");
const whyStatement = document.querySelector(".why-statement");
const designation = document.querySelector(".designation");
const buttons = document.querySelector(".buttons");
const score = document.querySelector(".score");

rock.textContent = "🪨";
paper.textContent = "📄";
scissors.textContent = "✂️";
resetButtonJS.textContent = "Restart?";

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

playGame();

function playGame() {
  rock.addEventListener("click", () => handleUserChoice("ROCK"));
  paper.addEventListener("click", () => handleUserChoice("PAPER"));
  scissors.addEventListener("click", () => handleUserChoice("SCISSORS"));
  resetButtonJS.addEventListener("click", () => resetGame());
}

function handleUserChoice(userChoice) {
  const computerChoice = getComputerChoice();
  playRound(userChoice, computerChoice);
  if (humanScore === 5) {
    whyStatement.innerHTML =
      "You reached 5 points and won the game!<br><br>" +
      "Computer reached " +
      computerScore +
      " points and lost!";

    endGame();
  } else if (computerScore === 5) {
    whyStatement.innerHTML =
      "Computer reached 5 points and won the game!<br><br>" +
      "You reached " +
      humanScore +
      " points and lost!";

    endGame();
  }
}

function playRound(humanChoice, computerChoice) {
  //human choice wins: human rock/scissors paper/rock scissors/paper
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    ++humanScore;
    score.textContent = humanScore;
    //alert("Human Won!" + humanScore + " " + computerScore);
    designation.textContent = "You Won!";
    score.innerHTML =
      "Human Score: &nbsp&nbsp&nbsp&nbsp" +
      humanScore +
      "&nbsp&nbsp&nbsp&nbsp Computer Score: &nbsp&nbsp&nbsp&nbsp" +
      computerScore;
  } else if (humanChoice === computerChoice) {
    //alert("Tie!");
    designation.textContent = "Tie!";
  } else {
    ++computerScore;
    //alert("Computer won!" + humanScore + " " + computerScore);
    designation.textContent = "You Lost!";
    score.innerHTML =
      "Human Score: &nbsp&nbsp&nbsp&nbsp" +
      humanScore +
      "&nbsp&nbsp&nbsp&nbsp Computer Score: &nbsp&nbsp&nbsp&nbsp" +
      computerScore;
  }
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  //alert("Computer Chose: " + computerChoice);
  whyStatement.textContent = "Computer Chose: " + computerChoice;
  return computerChoice;
}

function endGame() {
  humanScore = 0;
  computerScore = 0;
  rock.remove();
  paper.remove();
  scissors.remove();
  resetButtonHTML.appendChild(resetButtonJS);
  score.textContent = "";
}

function resetGame() {
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
  designation.textContent = "Choose Rock, Paper, or Scissors!";
  whyStatement.textContent = "First to Score 5 Points Wins";
  resetButtonJS.remove();
  score.textContent = "";
}
