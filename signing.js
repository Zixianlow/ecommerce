function signup() {
    var signupEmail = document.getElementById('signupEmail').value;
    var signupPassword = document.getElementById('signupPassword').value;

    if (localStorage.getItem(signupEmail) !== null) {
        document.getElementById('signupMessage').innerText = 'signupEmail already exists. Please choose a different signupEmail.';
        return;
    }
    localStorage.clear();
    localStorage.setItem(signupEmail, signupPassword);
    document.getElementById('signupMessage').innerText = 'Signup successful! Now you can log in.';
}

function login() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    var storedPassword = localStorage.getItem(loginEmail);
    if (storedPassword !== null && storedPassword === loginPassword) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
    } else {
        document.getElementById('loginMessage').innerText = 'Login failed. Please check your credentials.';
    }
}
