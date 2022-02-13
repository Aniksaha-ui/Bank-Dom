
function getEmail() {
    var email = document.getElementById('email');
    var emailValue = email.value;
    return emailValue;
}

function getPassword() {
    var password = document.getElementById('password');
    var passwordValue = password.value;
    return passwordValue;
}

const submitButton = document.getElementById('submit-button').addEventListener('click', function () {
    const email = getEmail();
    const password = getPassword();

    if (email == 'abc@gmail.com' && password == 'aaaaa') {
        window.location.href = "bankingsite.html";
    } else {
        window.location.href = "index.html";
        alert("Invalid Username or Password");
    }

})