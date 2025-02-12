document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const passwordInput = document.getElementById("p1");
  const eyeIcon = document.getElementById("togglePassword");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredEmail = document.getElementById("e1").value.trim();
    const enteredPassword = passwordInput.value.trim();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (!enteredEmail || !enteredPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

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
