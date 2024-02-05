// a.js

// document.addEventListener('DOMContentLoaded', function () {
    var loginApiEndpoint = 'http://localhost:8081';
    var zohoFormContainer = document.getElementById('zohoFormContainer');
    
    function submitLoginForm() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Perform additional validation if needed

        fetch(loginApiEndpoint + '/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginid: username,
                password: password,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);

            if (data.resultMessage.includes('Admin')) {
                // Display the Zoho registration form for admin
                showZohoForm();
            } else if (data.resultMessage.includes('User')) {
                window.location.href = '5Equireyfrom.html';
            } else {
                alert('Invalid role received from the server.');
            }
        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert("Bad Request: Please check your input.");
            } else {
                alert("Wrong LoginId or Password.");
            }
            console.error('Error:', error.message);
        });
    }

    function showZohoForm() {
        // Create an iframe element for the Zoho form
        var iframe = document.createElement('iframe');
        iframe.src = 'https://zfrmz.in/AZXWExd059RAov6UVnGg'; // Replace with the actual URL of your Zoho registration form
        iframe.width = '100%';
        iframe.height = '600px';

        // Append the iframe to the container
        zohoFormContainer.innerHTML = '';
        zohoFormContainer.appendChild(iframe);
    }
// });
