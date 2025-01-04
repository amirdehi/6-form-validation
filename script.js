document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear existing errors
    document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));

    let isValid = true;

    // Validate username
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        showError("usernameError", "Username is required.");
        isValid = false;
    }

    // Validate email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email.");
        isValid = false;
    }

    // Validate password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        isValid = false;
    }

    // Validate age
    const age = parseInt(document.getElementById("age").value, 10);
    if (isNaN(age) || age < 18 || age > 120) {
        showError("ageError", "Please enter a valid age (18-120).");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
