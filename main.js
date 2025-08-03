// Utility: Display a message to user
function showMessage(text, isError = true) {
  const msg = document.getElementById("message");
  msg.style.color = isError ? "red" : "green";
  msg.textContent = text;
}

// Register user
function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showMessage("Please fill in both fields.");
    return;
  }

  if (localStorage.getItem("authUser")) {
    showMessage("User already registered. Please login.");
    return;
  }

  localStorage.setItem("authUser", username);
  localStorage.setItem("authPass", password);
  showMessage("Registration successful! You can now log in.", false);
}

// Login user
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = localStorage.getItem("authUser");
  const storedPass = localStorage.getItem("authPass");

  if (!username || !password) {
    showMessage("Please fill in both fields.");
    return;
  }

  if (username === storedUser && password === storedPass) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "secure.html";
  } else {
    showMessage("Invalid username or password.");
  }
}
