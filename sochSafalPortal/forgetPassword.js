var loginApiEndpoint ='http://localhost:8081';

function showForgotPasswordForm() {
    document.getElementById('forgotPasswordForm').style.display = 'block';
}

function resetPassword() {
    var email = document.getElementById('forgetPasswordEmail').value;

    // Make an API call to the Spring Boot backend to send a password reset link
    fetch(loginApiEndpoint+'/api/users/resetPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Password reset link sent to your email. Please check your inbox.');
        // You may choose to redirect or update the UI here
    })
    .catch(error => {
        alert('Error sending password reset link. Please try again.');
        console.error('Error:', error.message);
    });
}
