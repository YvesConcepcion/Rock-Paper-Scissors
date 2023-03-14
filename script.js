'use strict';

//selecting elements
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');
const score0el = document.getElementById('score0el');
const score1el = document.getElementById('score1el');
const outcome = document.getElementById('result');
const outcomeDesc = document.getElementById('result-description');

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
    playerScore += 1;
    outcome.textContent = `YOU WIN!`;
    return (
      (outcomeDesc.textContent = `${playerSelection} beats ${computerSelection}!`),
      (score0el.textContent = `Score: ${playerScore}`)
    );
    return playerScore;
  } else if (
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
  ) {
    compScore += 1;
    outcome.textContent = `YOU LOSE!`;
    return (
      (outcomeDesc.textContent = `${playerSelection} beats ${computerSelection}!`),
      (score1el.textContent = `Score: ${compScore}`)
    );
  } else {
    return (
      (outcome.textContent = `IT'S A TIE!`), (outcomeDesc.textContent = ``)
    );
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

// const game = function () {
//   while (playerScore < 5 && compScore < 5) {
//     playRound(playerSelection(), getComputerChoice());
//     if (playerScore === 5) {
//       console.log('You win!');
//     } else if (compScore === 5) {
//       console.log('You lose!');
//     }
//   }
// };
