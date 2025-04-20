function toggleForm(formType) {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    if (formType === 'login') {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {};
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        formData[input.id] = input.value;
    });
    
    // Log form data (replace with your actual form submission logic)
    console.log('Form submitted:', formData);
    
    // Clear form
    form.reset();
    
    return false;
} 