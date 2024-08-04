document.querySelector(".container").addEventListener("submit",function(event){
    event.preventDefault();
    let isValid = true;
    const username = document.querySelector('#name').value.trim();
    const password = document.querySelector('#pass').value.trim();
    const confirmPassword = document.querySelector('#conf-pass').value.trim();

    document.querySelector('#usernameError').textContent = "";
    document.querySelector('#passwordError').textContent = "";
    document.querySelector('#confirmPasswordError').textContent = "";
    document.querySelector('#successMessage').textContent="";

    if (!username) {
        document.querySelector('#usernameError').textContent = 'Username is required';
        isValid = false;
    }

    if (!password) {
        document.querySelector('#passwordError').textContent = 'Password is required';
        isValid = false;
    }

    if (!confirmPassword) {
        document.querySelector('#confirmPasswordError').textContent = 'Confirm Password is required';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.querySelector('#confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        document.querySelector('#successMessage').textContent = 'You have registered successfully';
    }
});