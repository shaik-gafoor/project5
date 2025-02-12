document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("f1").value;
    const lastName = document.getElementById("l1").value;
    const email = document.getElementById("e1").value;
    const password = document.getElementById("p1").value;

    if (firstName && lastName && email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
  const passwordInput = document.getElementById("p1");
  const eyeIcon = document.getElementById("togglePassword");

  if (eyeIcon) {
    eyeIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.add("visible");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("visible");
      }
    });
  }
});
