import _ from 'lodash';
import './style.css';
import Img from './image.jpg';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myImage = new Image();
  myImage.src = Img;

  element.appendChild(myImage);

  // Add the btn t our existing div
  btn.textContent = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
