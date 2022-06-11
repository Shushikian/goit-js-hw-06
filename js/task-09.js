const body = document.querySelector('body');
const button = document.querySelector('button');
const span = document.querySelector('p span.color');

button.addEventListener('click', changeColor)

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}