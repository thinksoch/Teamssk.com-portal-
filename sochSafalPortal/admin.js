var loginApiEndpoint = 'http://localhost:8081';

function submitLoginForm() {
    // Get the values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Make an API request to your Spring Boot backend for authentication
    // You can use libraries like fetch or Axios for this

    var formData = {
        loginid: username,
        password: password
    };

    fetch(loginApiEndpoint + '/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                return response.text(); // Handle plain text response
            }
        })
        .then(data => {
            alert("Login Successfully");
            console.log('Success:', data);
            // Display success message in the message container
            // setMessage('Login Successful', 'success');

            // Check the role and redirect accordingly
            if (data.resultMessage.includes('Admin')) {
                window.location.href = 'adminDashboard.html';
            }// else if (data.resultMessage.includes('User')) {
            //  window.location.href = '5Equireyfrom.html';
            // } 
            else {
                // alert('Invalid role received from the server.');
                window.location.href = '5Equireyfrom.html';

            }
        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert("Bad Request: Please check your input.");
            } else {
                // Display error message in the message container
                // setMessage('Invalid LoginId or Password.', 'error');

                alert("Wrong LoginId or Password.");
            }
            console.error('Error:', error.message);
        });
}

