// Get form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

// Create error message helper
function showError(input, message) {
    // Remove existing error
    const existing = input.parentElement.querySelector('.error-msg');
    if (existing) existing.remove();

    // Add red border
    input.style.borderColor = 'red';

    // Create error message
    const error = document.createElement('p');
    error.classList.add('error-msg');
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';
    error.textContent = message;

    input.parentElement.appendChild(error);
}

// Clear error helper
function clearError(input) {
    const existing = input.parentElement.querySelector('.error-msg');
    if (existing) existing.remove();
    input.style.borderColor = '#ddd';
}

// Validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Clear errors on typing
emailInput.addEventListener('input', () => clearError(emailInput));
passwordInput.addEventListener('input', () => clearError(passwordInput));

// Form submit validation
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Check email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email');
        valid = false;
    }

    // Check password
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required');
        valid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        valid = false;
    }

    // If valid, go to dashboard
    if (valid) {
        window.location.href = '../pages/dashboard.html';
    }
});