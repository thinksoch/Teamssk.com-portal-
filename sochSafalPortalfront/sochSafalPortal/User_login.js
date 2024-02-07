//localhost
// var loginApiEndpoint = 'http://localhost:8080';

//Avinash
var loginApiEndpoint ='http://13.201.211.199:8080';

//Asif
// var loginApiEndpoint = 'http://http://65.0.0.193/:8080';

//USER & ADMIN LOGIN
function loginUser() {
    var loginid = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    if (loginid.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    var formData = {
        loginid: loginid,
        password: password,
    };
    console.log('loginid:', loginid);
    console.log('password:', password);
    console.log('formData:', formData);
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
                return response.text(); 
            }
        })
        .then(data => {
            alert("Login Successfully");
            console.log('Success:', data);
            window.location.href = '5Equireyfrom.html';

        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert("Bad Request: Please check your input.");
            } else {
                alert("Wrong LoginId or Password..");

            }
            console.error('Error:', error.message);
        });
}
