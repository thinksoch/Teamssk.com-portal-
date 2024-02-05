var loginApiEndpoint ='http://localhost:8081';

//runnble
function loginUserOrAdmin() {
    var loginid = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    // var role = document.getElementById("role").value;

    if (loginid.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }
    // if (role.trim() == "") {
    //     alert("Please select Role: Admin or User");
    // }
    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

    // if (!passwordRegex.test(password)) {
    //     alert('Please enter an appropriate password with at least 8 characters, including one uppercase letter, two numbers, and one special character.');
    //     return;
    // }


    var formData = {
        loginid: loginid,
        password: password,
    };
    console.log('loginid:', loginid);
    console.log('password:', password);
    console.log('formData:', formData);

    // Determine the login API endpoint based on loginId
    //     var loginApiEndpoint = 'http://localhost:8081/api/users/login';

    // Check if the provided credentials are for admin

    if (loginid === 'admin') {
        // loginApiEndpoint = 'http://localhost:8081/api/admin/login';
        // Send data to the appropriate Spring Boot API using fetch
        fetch(loginApiEndpoint + '/api/admin/login', {
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
                window.location.href = 'adminDashboard.html';

            })
            .catch(error => {
                if (error instanceof SyntaxError) {
                    alert("Bad Request: Please check your input.");
                } else {
                    // alert("Error while Login. Please try again.");
                    alert("Wrong LoginId or Password..");

                }
                console.error('Error:', error.message);
            });

    } else {
        // Send data to the appropriate Spring Boot API using fetch
        // fetch(loginApiEndpoint + '/api/enquiries/submit', {
            fetch(loginApiEndpoint + '/api/users/login', {

        // fetch('http://localhost:8081/api/enquiries/submit', {
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
                window.location.href = '5Equireyfrom.html';

            })
            .catch(error => {
                if (error instanceof SyntaxError) {
                    alert("Bad Request: Please check your input.");
                } else {
                    // alert("Error while Login. Please try again.");
                    alert("Wrong LoginId or Password..");

                }
                console.error('Error:', error.message);
            });

    }

}

/*
function loginUserOrAdmin() {
    var loginid = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    // var role = document.getElementById("role").value;

    if (loginid.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }
    // if (role.trim() == "") {
    //     alert("Please select Role: Admin or User");
    // }

    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

    // if (!passwordRegex.test(password)) {
    //     alert('Please enter an appropriate password with at least 8 characters, including one uppercase letter, two numbers, and one special character.');
    //     return;
    // }


    var formData = {
        loginid: loginid,
        password: password,
    };
    console.log('loginid:', loginid);
    console.log('password:', password);
    console.log('formData:', formData);

    // Determine the login API endpoint based on loginId
    //     var loginApiEndpoint = 'http://localhost:8081/api/users/login';

    // Check if the provided credentials are for admin

    // if (role === 'Admin') {
    // loginApiEndpoint = 'http://localhost:8081/api/admin/login';
    // Send data to the appropriate Spring Boot API using fetch
    fetch('http://localhost:8081/api/users/login', {
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
            if (data.role == "Admin") {
                window.location.href = 'adminDashboard.html';

            } else {
                window.location.href = '5Equireyfrom.html';

            }
            // if (role === "admin") {
            //     window.location.href = "/admin-dashboard.html";
            // } else {
            //     window.location.href = "/user-enquiry-form.html";
            // }
        

        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert("Bad Request: Please check your input.");
            } else {
                // alert("Error while Login. Please try again.");
                alert("Wrong LoginId or Password..");

            }
            console.error('Error:', error.message);
        });

    // } else {
    //     // Send data to the appropriate Spring Boot API using fetch
    //     fetch('http://localhost:8081/api/enquiries/submit', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`Server returned ${response.status} ${response.statusText}`);
    //             }
    //             const contentType = response.headers.get('content-type');
    //             if (contentType && contentType.includes('application/json')) {
    //                 return response.json();
    //             } else {
    //                 return response.text(); // Handle plain text response
    //             }
    //         })
    //         .then(data => {
    //             alert("Login Successfully");
    //             console.log('Success:', data);
    //             window.location.href = '5Equireyfrom.html';

    //         })
    //         .catch(error => {
    //             if (error instanceof SyntaxError) {
    //                 alert("Bad Request: Please check your input.");
    //             } else {
    //                 // alert("Error while Login. Please try again.");
    //                 alert("Wrong LoginId or Password..");

    //             }
    //             console.error('Error:', error.message);
    //         });

    // }

}
*/