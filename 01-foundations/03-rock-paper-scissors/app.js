const choices = ['pierre', 'papier', 'ciseaux'];
const NUMBER_OF_ROUNDS = 5;

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("C'est une égalité");
    return 0;
  } else if (
    (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
    (playerSelection === 'papier' && computerSelection === 'pierre') ||
    (playerSelection === 'ciseaux' && computerSelection === 'papier')
  ) {
    console.log('Vous avez gagnez cette manche');
    return 1;
  } else {
    console.log('Vous avez perdez cette manche');
    return -1;
  }
};

const game = () => {
  let score = 0;

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection;

    do {
      playerSelection = prompt(
        'Entrez une valeur parmi : pierre, papier ou ciseaux'
      );

      if (!playerSelection || playerSelection === null) {
        return;
      } else {
        playerSelection = playerSelection.toLowerCase();
      }
    } while (
      playerSelection != 'pierre' &&
      playerSelection != 'papier' &&
      playerSelection != 'ciseaux'
    );

    score += playRound(playerSelection, computerSelection);
  }

  if (score === 0) {
    console.log('Math nul.');
  } else if (score > 0) {
    console.log('Vous remportez la partie !');
  } else {
    console.log('Vous perdez la partie :(');
  }
};

game();
