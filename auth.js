document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn || isLoggedIn !== "true") {
    alert("You must log in first!");
    window.location.href = "login.html"; // Redirect to login page
  }

  // Logout Functionality
  document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn"); // Remove session
    window.location.href = "login.html"; // Redirect to login
  });
});
