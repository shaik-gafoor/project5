document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("f1").value;
    const lastName = document.getElementById("l1").value;
    const email = document.getElementById("e1").value;
    const password = document.getElementById("p1").value;

    if (firstName && lastName && email && password) {
      // Save user details to localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html"; // Redirect to login page
    } else {
      alert("Please fill in all fields.");
    }
  });
});
