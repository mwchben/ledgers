const inputs = document.querySelectorAll('input');

const pattern = {
    regno: ddkd,
    email: fsjkf
};

//validation function
function validation(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validation(e.target, pattern[e.target.attributes.name.value]);
    });
});