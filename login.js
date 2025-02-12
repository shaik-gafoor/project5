document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredEmail = document.getElementById("e1").value;
    const enteredPassword = document.getElementById("p1").value;

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      localStorage.setItem("isLoggedIn", "true"); // Set login session
      window.location.href = "index.html"; // Redirect to chat app
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
