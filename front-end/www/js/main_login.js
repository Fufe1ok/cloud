function onRegistrationClick() {
 


const url = "https://rnazaruk-backend.appspot.com/user/add";

const nameInput = document.getElementById("registration_name");
const emailInput = document.getElementById("registration_email");
const passwordInput = document.getElementById("registration_password");



  const inputData = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Hello:", data);
      location.href = "./";
    })
    .catch(e => console.error(e));

    

};

function onLoginClick(){
const url1 = "https://rnazaruk-backend.appspot.com/user/login";

const emailInput = document.getElementById("login_email");
const passwordInput = document.getElementById("login_password");



  const inputData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  fetch(url1, {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Hello:", data);
      location.href = "./";
    })
    .catch(e => console.error(e));

};