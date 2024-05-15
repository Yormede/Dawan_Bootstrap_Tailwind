let isEmailValid = true;
let isMessageValid = true;

(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

    if (!form.checkValidity() || !isEmailValid || !isMessageValid) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})
})()



const emailField = document.getElementById('email');

emailField.addEventListener('change', function () {
    const emailEntered = emailField.value;

    if(
        !emailEntered.endsWith('dawan.fr') &&
        !emailEntered.endsWith('gmail.com') &&
        !emailEntered.endsWith('hotmail.com')
    ) {
        emailField.classList.add('is-invalid');
        isEmailValid = false;
    } else {
        emailField.classList.remove('is-invalid');
        isEmailValid = true;

        document.getElementById('emailSuccessMessage').innerHTML += ' et l\'extention est correct.';
    }
});


const messageArea = document.getElementById('message');

messageArea.addEventListener('change', function () {
    const message = messageArea.value;

    if(message.trim().length < 20) {
        messageArea.classList.add('is-invalid');
        isMessageValid = false;
    } else {
        messageArea.classList.remove('is-invalid');
        isMessageValid = true;
    }
});
