// Script for form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employeeForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();

        // Validate form fields
        let isValid = true;

        // Name validation
        const nameError = document.getElementById('nameError');
        if (name === '' || !/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = 'Please enter a valid name (letters only).';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Age validation
        const ageError = document.getElementById('ageError');
        if (age === '' || isNaN(age) || age < 18 || age > 65) {
            ageError.textContent = 'Please enter a valid age (18-65).';
            isValid = false;
        } else {
            ageError.textContent = '';
        }

        // If all validations pass, process the submission
        if (isValid) {
            // Mock submission (this would be where you send the data to a server)
            console.log('Employee added:', { name, email, age });

            alert('Employee added successfully!');
            form.reset(); // Clear the form fields
        }
    });
});
