var loginApiEndpoint = 'http://localhost:8081';

// Move event listeners outside validateForm
document.getElementById('name').addEventListener('input', function (event) {
    var inputValue = this.value;
    if (/[^A-Za-z]/.test(inputValue)) {
        alert('Enter only letters (A-Z, a-z)');
        this.value = inputValue.replace(/[^A-Za-z]/gi, '');
    }
});

document.getElementById('surname').addEventListener('input', function (event) {
    var inputValue = this.value;
    if (/[^A-Za-z]/.test(inputValue)) {
        alert('Enter only letters (A-Z, a-z)');
        this.value = inputValue.replace(/[^A-Za-z]/gi, '');
    }
});

document.getElementById('dob').addEventListener('input', function (event) {
    var selectedDate = new Date(this.value);
    var currentDate = new Date();
    if (selectedDate >= currentDate) {
        alert('Please select a date before the current date.');
        this.value = ''; // Reset the value
    }
});

function submitEnquiryForm() {
    if (!validateForm()) {
        return;
    }

    var formData = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        district: document.getElementById("district").value,
        tahsil: document.getElementById("tahsil").value,
        pincode: document.getElementById("pincode").value,
        qualification: document.getElementById("qualification").value,
        occupation: document.getElementById("occupation").value,
        interest: document.getElementById("interest").value,
    };

    (async () => {
        try {
            const response = await fetch(`${loginApiEndpoint}/api/enquiries/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Server returned ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            const data = contentType && contentType.includes('application/json') ? await response.json() : await response.text();

            alert("Submitted Successfully");
            console.log('Success:', data);
            window.location.href = 'User_login.html';
        } catch (error) {
            alert("Error while Submitting");
            console.error('Error:', error);
        }
    })();
}

function validateForm() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const tahsil = document.getElementById("tahsil").value;
    const pincode = document.getElementById("pincode").value;
    const qualification = document.getElementById("qualification").value;
    const occupation = document.getElementById("occupation").value;
    const interest = document.getElementById("interest").value;

    if (!name || !surname || !email || !phone || !dob || !gender || !age || !country || !state || !district || !tahsil || !pincode || !qualification || !occupation || !interest) {
        alert('Please fill in all required fields.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
