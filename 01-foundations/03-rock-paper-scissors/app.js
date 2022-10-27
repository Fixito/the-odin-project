const choices = [
  { hand: 'rock', class: 'fas fa-hand-back-fist' },
  { hand: 'paper', class: 'fas fa-hand' },
  { hand: 'scissors', class: 'fas fa-hand-peace' }
];

const btns = document.querySelectorAll('.btn');
const playAgainBtn = document.querySelector('.play-again');
const results = document.querySelector('.results');
const humanSign = document.querySelector('.human-sign');
const humanScore = document.querySelector('.human-score');
const cpuSign = document.querySelector('.cpu-sign');
const cpuScore = document.querySelector('.cpu-score');
const comment = document.querySelector('.comment');
let score = {
  human: 0,
  cpu: 0
};

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 1;
  } else {
    return -1;
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const playerSelection = e.currentTarget.dataset.selection;
    const computerSelection = getComputerChoice();
    const iconClassList = e.currentTarget.children[0].classList.value;
    const result = playRound(playerSelection, computerSelection.hand);
    let sentence = '';

    humanSign.children[0].className = iconClassList;
    cpuSign.children[0].className = computerSelection.class;

    if (result === 0) {
      sentence = `C'est une égalité.`;
    } else if (result > 0) {
      score.human++;
      humanScore.textContent = score.human;
      sentence = `Vous gagnez cette manche.`;
    } else {
      score.cpu++;
      cpuScore.textContent = score.cpu;
      sentence = `Vous perdez cette manche.`;
    }

    if (score.human >= 5 || score.cpu >= 5) {
      if (score.human >= 5) {
        sentence = 'Vous remportez la partie !';
      } else {
        sentence = "L'ordinateur remporte la partie !";
      }

      playAgainBtn.style.display = 'block';
    }

    comment.textContent = sentence;
  });
});

playAgainBtn.addEventListener('click', () => {
  score = {
    human: 0,
    cpu: 0
  };
  humanSign.children[0].className = 'fas fa-question';
  cpuSign.children[0].className = 'fas fa-question';
  humanScore.textContent = 0;
  cpuScore.textContent = 0;
  comment.textContent = '';
  playAgainBtn.style.display = 'none';
});
