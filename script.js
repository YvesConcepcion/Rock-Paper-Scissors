"use strict";

let playerScore = 0;
let compScore = 0;
const getComputerChoice = function () {
  const computerArray = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * computerArray.length);
  let computerSelection = computerArray[random];
  console.log(computerSelection);
  return computerSelection;
};

const playerSelection = function () {
  let resp = prompt("What is your choice?");
  let playerSelection = resp.toLowerCase();
  console.log(playerSelection);
  return playerSelection;
};

const playRound = function (playerSelection, computerSelection) {
  if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    let result = "win";
    playerScore += 1;
    console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
    console.log(playerScore);
    return playerScore;
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    let result = "lose";
    compScore += 1;
    console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
    console.log(compScore);
    return compScore;
  } else {
    let result = "tie";
    console.log("It's a tie!");
    return result;
  }
};

// const game = function () {
//   while (playerScore < 5 && compScore < 5) {
//     playRound(playerSelection(), getComputerChoice());
//     if (playerScore === 5) {
//       console.log("You win!");
//     } else if (compScore === 5) {
//       console.log("You lose!");
//     }
//   }
// };
// game();
