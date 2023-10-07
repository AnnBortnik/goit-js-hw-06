function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
const colorChoice = document.querySelector('.color');

colorButton.addEventListener('click', newColor);
function newColor(event) {
  const randomColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = randomColor;
  colorChoice.textContent = `${randomColor}`;
}