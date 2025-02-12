document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      // Send a message to the parent window (index.html) to handle logout
      window.parent.postMessage("logout", "*");
    });
  }
});
