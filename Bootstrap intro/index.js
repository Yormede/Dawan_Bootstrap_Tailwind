const form = document.querySelector('form');
const inputTable = document.querySelectorAll('input')

console.log(inputTable);
inputTable.forEach(element => {
    element.addEventListener('change', () => {
        if (element.reportValidity()) {
            element.classList.toggle('is-valid');
            console.log(element.checkValidity());
        } else {
            element.classList.toggle('is-invalid');
            console.log(element.checkValidity());

        }

    })
});

