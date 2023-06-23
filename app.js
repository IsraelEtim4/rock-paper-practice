function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  // This is if statement for Scissors option
  if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You loose.';
    } else if (computerMove === 'Rock') {
      result = 'You win.';
    }

    // This is else statement for Paper option
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Rock') {
      result = 'You loose.';
    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }

    // This is else statement for Rock option
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You loose.';
    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }
  }

  alert(`You choose ${playerMove}, Computer choose ${computerMove}, ${result}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  // We use < sign so it won't ovelap
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  // Return a value from a function
  
  return computerMove;
}
