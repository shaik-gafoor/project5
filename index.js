document.addEventListener("DOMContentLoaded", function () {
  const chatFrame = document.getElementById("chat-frame");
  const placeholderText = document.querySelector(".chat-placeholder");
  const usersIframe = document.querySelector(".sidebar");

  usersIframe.addEventListener("load", function () {
    const usersDoc =
      usersIframe.contentDocument || usersIframe.contentWindow.document;

    // Add event listeners to user divs for loading chat
    usersDoc.querySelectorAll(".d6").forEach((userDiv) => {
      userDiv.addEventListener("click", function (event) {
        event.preventDefault();

        // Get user details
        const userImg = userDiv.querySelector("img").src;
        const userName = userDiv.querySelector("span").textContent;

        // Store user details in localStorage for chat.html access
        localStorage.setItem("chatUserImage", userImg);
        localStorage.setItem("chatUserName", userName);

        // Load chat.html in the chat frame with user-specific query
        chatFrame.src = `chat.html?user=${encodeURIComponent(userName)}`;
        chatFrame.style.display = "block";
        chatFrame.style.width = "100%";
        chatFrame.style.height = "100%";

        // Hide placeholder text
        placeholderText.style.display = "none";
      });
    });

    // ✅ Add event listener for logout button inside users.html
    const logoutBtn = usersDoc.querySelector(".logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default behavior

        // Clear user session and navigate to signup page
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "signup.html"; // Redirect full page
      });
    }
  });

  // Listen for chat frame load to apply user image and name dynamically
  chatFrame.addEventListener("load", function () {
    chatFrame.contentWindow.document.addEventListener(
      "DOMContentLoaded",
      function () {
        const chatHeaderImg =
          chatFrame.contentWindow.document.querySelector(".profile-pic");
        const chatHeaderName =
          chatFrame.contentWindow.document.querySelector(".chat-username");
        const messageImages = chatFrame.contentWindow.document.querySelectorAll(
          ".message.received .message-profile-pic"
        );

        // Retrieve stored user info
        const storedImg = localStorage.getItem("chatUserImage");
        const storedName = localStorage.getItem("chatUserName");

        if (storedImg && storedName) {
          chatHeaderImg.src = storedImg;
          chatHeaderName.textContent = storedName;

          // Update profile pictures for received messages
          messageImages.forEach((img) => {
            img.src = storedImg;
          });
        }
      }
    );
  });
});
