function registerUser() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Simple validation (real apps need backend!)
  if (name && email && password) {
    alert("Registration successful!\nWelcome, " + name);
    return true;
  }

  alert("Please fill all fields.");
  return false;
}

function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful!");
    return true;
  }

  alert("Invalid credentials.");
  return false;
}
