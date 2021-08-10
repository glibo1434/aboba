const popupArea = document.getElementById("popup");
const popupText = document.getElementById("myPopup");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const registerEmail = document.getElementById("register-email");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");
const registerButton = document.getElementById("register-button");

const registeredUsers = [];

function showPopup() {
  popupText.classList.add("show");
}

function hidePopup() {
  popupText.classList.remove("show");
}

function registerUser(event) {
  event.preventDefault();
  const username = registerUsername.value;
  const password = registerPassword.value;
  const email = registerEmail.value;
  if (!username || !password || !email) {
    alert("Please fill in all fields!");
  } else {
    registeredUsers.push({
      username,
      password,
      email,
    });

    alert("User registered!");
  }
  console.log(registeredUsers);
}

function loginUser(event) {
  event.preventDefault();
  let check;
  const username = loginUsername.value;
  const password = loginPassword.value;
  registeredUsers.forEach((user) => {
    if (username === user.username && password === user.password) {
      check = true;
      return;
    } else {
      check = false;
    }
  });
  if (check) {
    alert("User logged in!");
  } else {
    alert("No such user!");
  }
}

popupArea.addEventListener("mouseenter", showPopup);
popupArea.addEventListener("mouseleave", hidePopup);
registerButton.addEventListener("click", registerUser);
loginButton.addEventListener("click", loginUser);
