document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('exampleInputEmail1');
    const email = userEmail.value;

    const userPassword = document.getElementById('exampleInputPassword1');
    const password = userPassword.value;
    console.log(email, password)
    if (email == 'bou@jim.com' && password == 'Sabina') {
        window.location.href = "bank.html"
    }
    else {
        alert('Baincod Vag sala. Hack Korbi')
    }
})