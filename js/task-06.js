const input = document.querySelector('#validation-input');
const inputLength = Number(input.dataset.length);

input.addEventListener('blur', inputCheck);
function inputCheck(event) {
    const valuation = event.currentTarget.value.length;
    console.log(valuation);
    if (valuation === inputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
console.log(input);