var loginApiEndpoint ='http://localhost:8081';

function registerUser() {
    var formData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        dob: document.getElementById("dob").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        district: document.getElementById("district").value,
        taluka: document.getElementById("taluka").value,
        pincode: document.getElementById("pincode").value,
        uid: document.getElementById("uid").value,
        loginid: document.getElementById("login").value,
        password: document.getElementById("password").value,
        centerId: document.getElementById("cid").value,
        role:document.getElementById("role").value
    };

    fetch(loginApiEndpoint+'/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
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
}

    function validateForm(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const district = document.getElementById('district').value;
        const taluka = document.getElementById('taluka').value;
        const pincode = document.getElementById('pincode').value;
        const uid = document.getElementById('uid').value;
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const role=document.getElementById("role").value


            if (name === '' ||email===''||gender==''|| dob===''||country===''||centerName === '' || userId === '' || centralId === '' || login === '' || password === ''|| role==='') {
          alert('Please fill in all fields.');
          return;
      }
      
    
        if (mobile.length !== 10 || isNaN(mobile)) {
          document.getElementById('mobileError').innerText = 'Enter a valid 10-digit mobile number';
          return false;
      } else {
          document.getElementById('mobileError').innerText = '';
      }
    
        document.getElementById('error-message').innerText = ''; 
        submitForm();
      }
