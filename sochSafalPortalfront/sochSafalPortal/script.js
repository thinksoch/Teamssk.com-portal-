// USER REGISTRATION
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
        centerId: document.getElementById("cid").value
    };

    // Send data to Spring Boot API using fetch
    fetch('http://localhost:8081/api/users/register', {
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


    
        // Basic validation
        // if (!name || !phone || !email || !gender || !dob || !country || !state || !district || !taluka || !pincode || !uid || !login || !password) {
        //   document.getElementById('error-message').innerText = 'Please fill in all required fields.';
        //   return;
        // }
        if (userName === '' || centerName === '' || userId === '' || centralId === '' || loginId === '' || password === '') {
          alert('Please fill in all fields.');
          return;
      }
      
    
        // Mobile number validation
        // if (!/^\d{10}$/.test(phone)) {
        //   document.getElementById('error-message').innerText = 'Please enter a valid 10-digit mobile number.';
        //   return false;
        // }
        if (mobile.length !== 10 || isNaN(mobile)) {
          document.getElementById('mobileError').innerText = 'Enter a valid 10-digit mobile number';
          return false;
      } else {
          document.getElementById('mobileError').innerText = '';
      }
    
        // Email validation
        // if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        //   document.getElementById('error-message').innerText = 'Please enter a valid email address.';
        //   return;
        // }
    
        // Additional validation logic can be added as needed
    
        // If all validations pass, you can submit the form or perform further actions
        document.getElementById('error-message').innerText = ''; 
        submitForm();
      }
     

    //   function populateCountries() {
    //     const countryDropdown = document.getElementById('country');
    //     const countries = `
    //       Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria,
    //       Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina,
    //       Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Central African Republic,
    //       Chad, Chile, China, Colombia, Comoros, Congo, Democratic Republic of the, Congo, Republic of the, Costa Rica, Côte d’Ivoire,
    //       Croatia, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, East Timor (Timor-Leste), Ecuador,
    //       Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Eswatini, Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia,
    //       Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hungary, Iceland, India, Indonesia,
    //       Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Korea, North, Korea, South, Kosovo,
    //       Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi,
    //       Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Federated States of, Moldova,
    //       Monaco, Mongolia, Montenegro, Morocco, Mozambique, Myanmar (Burma), Namibia, Nauru, Nepal, Netherlands, New Zealand, Nicaragua,
    //       Niger, Nigeria, North Macedonia, Norway, Oman, Pakistan, Palau, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland,
    //       Portugal, Qatar, Romania, Russia, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino,
    //       Sao Tome and Principe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands,
    //       Somalia, South Africa, Spain, Sri Lanka, Sudan, Sudan, South, Suriname, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania,
    //       Thailand, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates,
    //       United Kingdom, United States, Uruguay, Uzbekistan, Vanuatu, Vatican City, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe
    //     `;
    //     const countryArray = countries.split(',').map(country => country.trim());
    
    //     countryArray.forEach(country => {
    //       const option = document.createElement('option');
    //       option.value = country.toLowerCase();
    //       option.text = country;
    //       countryDropdown.appendChild(option);
    //     });
    //   }
    
    //   // Call the function to populate the country dropdown on page load
    //   populateCountries();
    
    //   // Call the function to populate the Maharashtra state dropdown on page load
    //   // populateMaharashtraStates();
    
    
    //   function submitForm() {
    //     // Get form data and do something with it (e.g., send it to a server)
    //     var formData = {
    //       name: document.getElementById('name').value,
    //       phone: document.getElementById('phone').value,
    //       email: document.getElementById('email').value,
    //       gender: document.getElementById('gender').value,
    //       dob: document.getElementById('dob').value,
    //       country: document.getElementById('country').value,
    //       state: document.getElementById('state').value,
    //       district: document.getElementById('district').value,
    //       taluka: document.getElementById('taluka').value,
    //       pincode: document.getElementById('pincode').value,
    //       uid: document.getElementById('uid').value,
    //       login: document.getElementById('login').value,
    //       password: document.getElementById('password').value
    //     };
    
    //     // For demonstration purposes, log the form data to the console
    //     console.log(formData);
    //     alert('Form submitted successfully!');
    //     // In a real application, you would typically send this data to a server using AJAX or fetch.
    //   }
    //   var pincodeMapping = {
    //     '123456': { district: 'Sample District', taluka: 'Sample Taluka' },
    //     // Add more pin code mappings as needed
    //   };
      
    
    //   // Function to update district and taluka based on pin code
    //   function updateDistrictAndTaluka(pincode) {
    //     const districtField = document.getElementById('district');
    //     const talukaField = document.getElementById('taluka');
    //     console.log('Updating district and taluka for pin code:', pincode);
    
    
    //     // Reset fields
    //     districtField.value = '';
    //     talukaField.value = '';
    
    //     // Check if pin code is in the mapping
    //     if (pincodeMapping[pincode]) {
    //       districtField.value = pincodeMapping[pincode].district;
    //       talukaField.value = pincodeMapping[pincode].taluka;
    //     } else {
    //         // If pin code is not in the mapping, you can provide a default message or handle it accordingly
    //         document.getElementById('error-message').innerText = 'District and Taluka not found for the given pin code.';
          
    //     }
    //   }
    //   // Add this script to listen for input changes in the pin code field
    // document.getElementById('pincode').addEventListener('input', function() {
    //     updateDistrictAndTaluka(this.value);
    //   });
    
    //   // ... (previous script code) ...
    
    //   // Function to save form data to localStorage
    //   function saveFormData() {
    //     const formData = {
    //       // Add other form fields as needed
    //       state: document.getElementById('state').value,
    //       pincode: document.getElementById('pincode').value,
    //       // Add other form fields as needed
    //     };
    
    //     localStorage.setItem('formData', JSON.stringify(formData));
    //   }
    
    //   // Function to load form data from localStorage
    //   function loadFormData() {
    //     const formDataString = localStorage.getItem('formData');
    //     if (formDataString) {
    //       const formData = JSON.parse(formDataString);
    
    //       // Set form fields with loaded data
    //       document.getElementById('state').value = formData.state;
    //       document.getElementById('pincode').value = formData.pincode;
    //       // Set other form fields with loaded data
    //     }
        
    //   }
    
    //   // Call the function to load form data on page load
    // //   loadFormData();
    //   //alert('Form submitted successfully!');
    //  // window.location.href ='User_login.html';
    // //  function submitForm(){
    // //  var formData = {
    // //     name: document.getElementById('name').value,
    // //     phone: document.getElementById('phone').value,
    // //     email: document.getElementById('email').value,
    // //     gender: document.getElementById('gender').value,
    // //     dob: document.getElementById('dob').value,
    // //     country: document.getElementById('country').value,
    // //     state: document.getElementById('state').value,
    // //     district: document.getElementById('district').value,
    // //     taluka: document.getElementById('taluka').value,
    // //     pincode: document.getElementById('pincode').value,
    // //     uid: document.getElementById('uid').value,
    // //     login: document.getElementById('login').value,
    // //     password: document.getElementById('password').value
    // //   };
    // //   console.log(formData);
    // //   alert('Form submitted successfully!')
    
    // //   // Display success message
    // //   document.getElementById('error-message').innerText = 'Submitted successfully!';
      
    // // // Redirect to the next page after a short delay (e.g., 2 seconds)
    // // setTimeout(function () {
    // //     window.location.href = 'User_login.html'; // Replace 'next_page.html' with the actual URL
    // //   }, 2000);
    // // }
    //     //document.getElementById('error-message').innerText = '';
    //     //saveFormData();
    //     //window.location.href = 'User_login.html';   
    
//USER & ADMIN LOGIN

function loginUser() {
    // var id = document.getElementById('id').value;
    // var password = document.getElementById('password').value;
    var loginid = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

    // if (!passwordRegex.test(password)) {
    //     alert('Please enter an appropriate password with at least 8 characters, including one uppercase letter, two numbers, and one special character.');
    //     return;
    // }

    // var loginid = document.getElementById("id").value;
    // var password = document.getElementById("password").value;

    var formData = {
        loginid: loginid,
        password: password,
    };
    console.log('loginid:', loginid);
    console.log('password:', password);
    console.log('formData:', formData);

    // Determine the login API endpoint based on loginId
    var loginApiEndpoint = 'http://localhost:8081/api/users/login';

    // Check if the provided credentials are for admin
    if (loginid === 'admin' && password === 'Admin@12') {
        loginApiEndpoint = 'http://localhost:8081/api/admin/login';
    }

    // Send data to the appropriate Spring Boot API using fetch
    fetch(loginApiEndpoint, {
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

function submitEnquiryForm() {
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

    // Send data to Spring Boot API using fetch
    fetch('http://localhost:8081/api/enquiries/submit', {
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
        // return response.json();
        //         // Check if the response is JSON before trying to parse it
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return response.text(); // Return response as text if not JSON
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
}

// function loginUser() {
//     var formData = {
//         loginid: document.getElementById("login").value,
//         password: document.getElementById("password").value,
//     };

//     // Send data to Spring Boot API using fetch
//     fetch('http://localhost:8081/api/users/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Server returned ${response.status} ${response.statusText}`);
//         }
//         // return response.json(); //handle json object
//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//             return response.json();
//         } else {
//             return response.text(); // Handle plain text response
//         }
//     })
//     .then(data => {
//         alert("Login Successfully");
//         console.log('Success:', data);
//     })
//     .catch(error => {
//                 if (error instanceof SyntaxError) {
//                     alert("Bad Request: Please check your input.");
//                 } else {
//                     alert("Error while Login. Please try again.");
//                 }
//                 console.error('Error:', error.message);
//             });
// }

