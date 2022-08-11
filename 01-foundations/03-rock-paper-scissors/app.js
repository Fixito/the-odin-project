const choice = ['pierre', 'papier', 'ciseaux'];
const NUMBER_OF_ROUNDS = 5;

const getComputerChoice = () => {
  return choice[Math.floor(Math.random() * choice.length)];
};

const playRound = (playerSelection, computerSelection, scores) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'pierre' && computerSelection === 'papier') {
    console.log('Tu perds ! Le Papier bat la Pierre');
    return { ...scores, cpu: scores.cpu + 1 };
  } else if (playerSelection === 'pierre' && computerSelection === 'ciseaux') {
    console.log('Tu gagnes ! La Pierre bat les Ciseaux');
    return { ...scores, player: scores.player + 1 };
  } else {
    console.log('Égalité !');
    return scores;
  }
};

const game = () => {
  let scores = {
    player: 0,
    cpu: 0
  };

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const playerSelection = prompt('Entrez votre choix :');
    const computerSelection = getComputerChoice();

    scores = playRound(playerSelection, computerSelection, scores);
  }

  const { player, cpu } = scores;

  console.log(`Joueur : ${player} - CPU: ${cpu}`);

  if (player > cpu) {
    console.log('Le joueur gagne !');
  } else if (player < cpu) {
    console.log("L'ordinateur gagne !");
  } else {
    console.log('Match nul !');
  }
};

game();
