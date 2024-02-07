
    function submitEnquiryForm() {

        // Validation
        if (!validateForm()) {
            return;
        }

        // Form data
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
    
        // Fetch request to send data to Spring Boot backend API
        fetch('http://localhost:8081/api/enquiries/submit', {
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
                alert("Submitted Successfully");
                console.log('Success:', data);
                window.location.href = 'User_login.html';
    
            })
            .catch(error => {
                alert("Error while Submitting");
                console.error('Error:', error);
            });
    
        // fetch('http://localhost:8081/api/users/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(Object.fromEntries(formData))
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     alert('Form submitted successfully!');
        //     window.location.href = 'User_Registration.html';
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
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
    
        // Simple validation (you may need to enhance it based on your requirements)
        if (!name || !surname || !email || !phone || !dob || !gender || !age || !country || !state || !district || !tahsil || !pincode || !qualification || !occupation || !interest) {
            alert('Please fill in all required fields.');
            return false;
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    
        // Phone number validation
        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit mobile number.');
            return false;
        }
    
        // Additional validation logic for other fields can be added here
    
        return true;
    }
    
    // function validateForm() {
    //     const name = document.getElementById("name").value;
    //     const surname = document.getElementById("surname").value;
    //     const email = document.getElementById("email").value;
    //     const phone = document.getElementById("phone").value;
    //     const dob = document.getElementById("dob").value;
    //     const gender = document.getElementById("gender").value;
    //     const age = document.getElementById("age").value;
    //     const country = document.getElementById("country").value;
    //     const state = document.getElementById("state").value;
    //     const district = document.getElementById("district").value;
    //     const tahsil = document.getElementById("tahsil").value;
    //     const pincode = document.getElementById("pincode").value;
    //     const qualification = document.getElementById("qualification").value;
    //     const occupation = document.getElementById("occupation").value;
    //     const interest = document.getElementById("interest").value;

    //     // Simple validation (you may need to enhance it based on your requirements)
    //     if (!name || !surname || !email || !phone || !dob || !gender || !age || !country || !state || !district || !tahsil || !pincode || !qualification || !occupation || !interest) {
    //         alert('Please fill in all required fields.');
    //         return false;
    //     }

    //     // Email validation
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         alert('Please enter a valid email address.');
    //         return false;
    //     }

    //     // Phone number validation (you may need to adjust the pattern based on your requirements)
    //     // const phoneRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{3}$/;
    //     // if (!phoneRegex.test(phone)) {
    //     //     alert('Please enter a valid phone number in the format XXX-XX-XXX.');
    //     //     return false;
    //     // }
    //     if (!/^\d{10}$/.test(phone)) {
    //         document.getElementById('error-message').innerText = 'Please enter a valid 10-digit mobile number.';
    //         return;
    //     }
    
    //     return true;
    // }
