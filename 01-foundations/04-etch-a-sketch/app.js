const sketchboard = document.querySelector('.sketchboard');
const btn = document.querySelector('.btn');
const DEFAULT_NUMBER_OF_SQUARES = 64;
let arr = [255, 255, 255];
let mouseDown = false;
let boxes;

const getRandomColor = () => {
  for (let i = 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 255);
  }

  return `rgb(${arr[0]},${arr[1]},${arr[2]})`;
};

const createGrid = (numberOfSquares) => {
  const totalSquares = numberOfSquares * numberOfSquares;
  let grid = '';

  sketchboard.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
  sketchboard.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;

  for (let i = 0; i < totalSquares; i++) {
    grid += `<div class="box"></div>`;
  }

  sketchboard.innerHTML = grid;

  boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    box.addEventListener('mousedown', () => {
      box.style.backgroundColor = getRandomColor();
    });
  });

  sketchboard.addEventListener('mouseover', (e) => {
    if (mouseDown && e.target != sketchboard) {
      e.target.style.backgroundColor = getRandomColor();
    }
  });
};

const resetSketchboard = () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
};

sketchboard.addEventListener('mousedown', () => {
  mouseDown = true;
});

document.addEventListener('mouseup', () => {
  mouseDown = false;
});

btn.addEventListener('click', () => {
  let numberOfSquares = +prompt('Veuillez indiquer le nombre de carrés :');

  if (!numberOfSquares) {
    while (isNaN(numberOfSquares) || !numberOfSquares) {
      numberOfSquares = +prompt('Veuillez entrer un nombre :');
    }
  } else if (numberOfSquares > 100) {
    numberOfSquares = 100;
  }

  sketchboard.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
  sketchboard.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;

  resetSketchboard();
  createGrid(numberOfSquares);
});

createGrid(DEFAULT_NUMBER_OF_SQUARES);
