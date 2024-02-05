var loginApiEndpoint = 'http://localhost:8081';


// dashboard.js
function createNewUser() {
    // Redirect to the user registration page (userRegistration.html)
    window.location.href = 'User_Registration.html';
    // window.location.href = 'https://zfrmz.in/YYvdQoYyT91036J6baqO';

}


function loginUser() {
    // Redirect to the user registration page (userRegistration.html)
    window.location.href = 'User_login.html';
}

function createEnquiryForm() {
    window.location.href = "5Equireyfrom.html";
}

function exportUserData() {
    // Fetch user data from the Spring Boot API endpoint for exporting user data
    fetch(loginApiEndpoint + '/api/admin/exportUserData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'user_data.xlsx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            alert("User data exported successfully");
        })
        .catch(error => {
            alert("Error exporting user data. Please try again.");
            console.error('Error:', error);
        });
}

function exportUserEnquiryData() {
    // Fetch user enquiry data from the Spring Boot API endpoint for exporting user enquiry data
    fetch(loginApiEndpoint + '/api/admin/exportUserEnquiryData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'user_enquiry_data.xlsx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            alert("User enquiry data exported successfully");
        })
        .catch(error => {
            alert("Error exporting user enquiry data. Please try again.");
            console.error('Error:', error);
        });
}

function importUserData() {
    // Get the file input element
    const fileInput = document.getElementById('userFileInput'); // Assuming you have an input element with id 'userFileInput'

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        alert("Please select a file before importing.");
        return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    // Send the file to the Spring Boot API endpoint for importing user data
    fetch(loginApiEndpoint + '/api/admin/importUserData', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(message => {
            alert("User data imported successfully");
            console.log('Message:', message);
        })
        .catch(error => {
            alert("Error importing user data. Please try again.");
            console.error('Error:', error);
        });
}


