const counterValue = document.getElementById('counter');
const deBtn = document.querySelector('[data-action="decrement"]');
const inBtn = document.querySelector('[data-action="increment"]');
const result = document.querySelector('#value');
let counter = 0;

inBtn.addEventListener('click', () => {
    counter += 1;
    result.textContent = counter;
});
deBtn.addEventListener('click', () => {
    counter -= 1;
    result.textContent = counter;
});