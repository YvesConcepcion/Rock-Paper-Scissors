'use strict';

//selecting elements
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');
const score0el = document.getElementById('score0el');
const score1el = document.getElementById('score1el');
const outcome = document.getElementById('result');
const outcomeDesc = document.getElementById('result-description');
const botRock = document.querySelector('.bot--rock');
const botPaper = document.querySelector('.bot--paper');
const botScissors = document.querySelector('.bot--scissors');

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
  if (computerSelection === 'Rock')
    botRock.classList.add('active'),
      botPaper.classList.remove('active'),
      botScissors.classList.remove('active');
  if (computerSelection === 'Paper')
    botPaper.classList.add('active'),
      botRock.classList.remove('active'),
      botScissors.classList.remove('active');
  if (computerSelection === 'Scissors')
    botScissors.classList.add('active'),
      botRock.classList.remove('active'),
      botPaper.classList.remove('active');
  return computerSelection;
};

btnRock.addEventListener('click', function () {
  if (playerScore < 5 && compScore < 5)
    playRound('Rock', getComputerChoice()),
      btnRock.classList.add('active'),
      btnPaper.classList.remove('active'),
      btnScissors.classList.remove('active');
  if (playerScore === 5) {
    outcome.textContent = `YOU WIN!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You win!');
  } else if (compScore === 5) {
    outcome.textContent = `YOU LOSE!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You lose!');
  }
});

btnPaper.addEventListener('click', function () {
  if (playerScore < 5 && compScore < 5)
    playRound('Paper', getComputerChoice()),
      btnPaper.classList.add('active'),
      btnRock.classList.remove('active'),
      btnScissors.classList.remove('active');
  if (playerScore === 5) {
    outcome.textContent = `YOU WIN!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You win!');
  } else if (compScore === 5) {
    outcome.textContent = `YOU LOSE!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You lose!');
  }
});

btnScissors.addEventListener('click', function () {
  if (playerScore < 5 && compScore < 5)
    playRound('Scissors', getComputerChoice()),
      btnScissors.classList.add('active'),
      btnRock.classList.remove('active'),
      btnPaper.classList.remove('active');
  if (playerScore === 5) {
    outcome.textContent = `YOU WIN!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You win!');
  } else if (compScore === 5) {
    outcome.textContent = `YOU LOSE!!!`;
    outcomeDesc.textContent = `Play again?`;
    console.log('You lose!');
  }
});

// const game = function () {
//   while (playerScore < 5 && compScore < 5) {
//     playRound(playerSelection(), getComputerChoice());

// };
