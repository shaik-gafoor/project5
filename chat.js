document.addEventListener("DOMContentLoaded", function () {
  const chatHeaderImg = document.querySelector(".profile-pic");
  const chatHeaderName = document.querySelector(".chat-username");
  const messageImages = document.querySelectorAll(
    ".message.received .message-profile-pic"
  );
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-btn");
  const galleryButton = document.getElementById("gallery-btn"); // New Gallery Button
  const chatContainer = document.getElementById("chat-container");

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

  // Function to send a text message
  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      createMessageElement(messageText, "text");
      messageInput.value = ""; // Clear input field
    }
  }

  // Function to send an image message
  function sendImage(imageSrc) {
    createMessageElement(imageSrc, "image");
  }

  // Create message element (text or image)
  function createMessageElement(content, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "sent");

    if (type === "text") {
      // Create text div
      const textDiv = document.createElement("div");
      textDiv.classList.add("message-text");
      textDiv.textContent = content;
      messageDiv.appendChild(textDiv);
    } else if (type === "image") {
      // Create image element
      const imgElement = document.createElement("img");
      imgElement.src = content;
      imgElement.alt = "Sent Image";
      imgElement.classList.add("sent-image"); // Style in CSS
      messageDiv.appendChild(imgElement);
    }

    // Create profile image
    const img = document.createElement("img");
    img.src = "img.jpg"; // Use stored user image or default
    img.alt = "Profile";
    img.classList.add("message-profile-pic");

    messageDiv.appendChild(img);
    chatContainer.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Send message when clicking the send button
  sendButton.addEventListener("click", sendMessage);

  // Send message when pressing Enter
  messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  // Open file input when gallery button is clicked
  galleryButton.addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", function () {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          sendImage(event.target.result); // Send the selected image
        };
        reader.readAsDataURL(file);
      }
    });

    fileInput.click(); // Trigger file selection
  });
});
