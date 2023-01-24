const passwordSupportMessage = document.getElementById('passwordSupport')
const passwordElement = document.getElementById("password");
const passwordConfirmElement = document.getElementById("confirm_password");

passwordSupportMessage.style.visibility = 'hidden';

function checkPasswords() {
    let password = passwordElement.value;
    let confirmPassword = passwordConfirmElement.value;
    if (password !== confirmPassword) {
        passwordElement.style.border = "solid 2px rgb(216, 88, 105)";
        passwordConfirmElement.style.border = "solid 2px rgb(216, 88, 105)";
        passwordSupportMessage.style.visibility = 'visible';
    } else {
        passwordElement.style.border = "solid 2px rgb(141, 235, 161)";
        passwordConfirmElement.style.border = "solid 2px rgb(141, 235, 161)";
        passwordSupportMessage.style.visibility = 'hidden';
    }
}