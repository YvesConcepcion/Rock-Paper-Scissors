'use strict';

//selecting elements
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');
const score0el = document.getElementById('.playerscore');
const score1el = document.getElementById('.botscore');

let playerScore, compScore, playing, playerSelection, computerSelection;

//starting conditions
const init = function () {
  playerScore = 0;
  compScore = 0;
  playing = true;
  playerSelection = '';
  computerSelection = '';
};

init();

//playRound
const playRound = function (playerSelection, computerSelection) {
  if (
    (computerSelection === 'Rock' && playerSelection === 'Paper') ||
    (computerSelection === 'Scissors' && playerSelection === 'Rock') ||
    (computerSelection === 'Paper' && playerSelection === 'Scissors')
  ) {
    let result = 'win';
    playerScore += 1;
    console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
    console.log(playerScore);
    return playerScore;
  } else if (
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    let result = 'lose';
    compScore += 1;
    console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
    console.log(compScore);
    return compScore;
  } else {
    let result = 'tie';
    console.log("It's a tie!");
    return result;
  }
};

const getComputerChoice = function () {
  const computerArray = ['Rock', 'Paper', 'Scissors'];
  let random = Math.floor(Math.random() * computerArray.length);
  let computerSelection = computerArray[random];
  console.log(computerSelection);
  return computerSelection;
};

btnRock.addEventListener('click', function () {
  playRound('Rock', getComputerChoice());
});

btnPaper.addEventListener('click', function () {
  playRound('Paper', getComputerChoice());
});

btnScissors.addEventListener('click', function () {
  playRound('Scissors', getComputerChoice());
});

const game = function () {
  while (playerScore < 5 && compScore < 5) {
    playRound(playerSelection(), getComputerChoice());
    if (playerScore === 5) {
      console.log('You win!');
    } else if (compScore === 5) {
      console.log('You lose!');
    }
  }
};
