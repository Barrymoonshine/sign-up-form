// document.getElementById("submitButton").addEventListener("click", (e) => {
//     getPasswords();
//     if (password == confirmPassword) {
//     } else {
//         alert('Password do not match, please try again')
//     }
// })

// function getPasswords() {
//     password = document.getElementById("password").value;
//     confirmPassword = document.getElementById("confirm_password").value;
// }

const passwordSupportMessage = document.getElementById('passwordSupport')

passwordSupportMessage.style.visibility = 'hidden';


function checkPasswords() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    if (password !== confirmPassword) {
        document.getElementById("password").style.border = "solid 2px rgb(216, 88, 105)";
        document.getElementById("confirm_password").style.border = "solid 2px rgb(216, 88, 105)";
        passwordSupportMessage.style.visibility = 'visible';
    } else {
        document.getElementById("password").style.border = "solid 2px rgb(141, 235, 161)";
        document.getElementById("confirm_password").style.border = "solid 2px rgb(141, 235, 161)";
        passwordSupportMessage.style.visibility = 'hidden';
    }
}