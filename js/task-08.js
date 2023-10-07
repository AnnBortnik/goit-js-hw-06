const form = document.querySelector('.login-form');
form.addEventListener('submit', formUse);
function formUse(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;
    const information = {
        email: email.value,
        password: password.value,
    }
    if (email.value.length === 0 || password.value.length === 0) {
        alert('All fields need to be filled');
    }
    console.log(information);
    event.currentTarget.reset();
}
