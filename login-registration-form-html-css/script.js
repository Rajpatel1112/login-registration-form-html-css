// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.classList.toggle('uil-eye', type === 'text');
    this.classList.toggle('uil-eye-slash', type === 'password');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the sign-up link element
    const signUpLink = document.getElementById('signUpLink');

    // Add a click event listener to the sign-up link
    signUpLink.addEventListener('click', function(event) {
        // Prevent the default action of the link
        event.preventDefault();

        // Redirect to the registration page
        window.location.href = 'regsitation.html'; // Ensure this path is correct
    });
});

