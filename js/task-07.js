const fontSizeControl = document.querySelector('#font-size-control');
const line = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    const textSize = fontSizeControl.value;
    line.style.fontSize = `${textSize}px`;
});