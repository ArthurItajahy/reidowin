function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    } else if (username.length < 5 || password.length < 5) {
        errorMessage.textContent = "Username and password must be at least 5 characters long.";
        return false;
    }
    
    // If form is valid, remove any error messages
    errorMessage.textContent = "";
    alert("Login successful!");
    return true;
}
