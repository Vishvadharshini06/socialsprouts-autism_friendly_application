async function sendMessageToChatbot(message) {
  try {
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.reply || "Sorry, I couldn't process that.";
  } catch (error) {
    console.error("Error:", error);
    return "Error connecting to chatbot.";
  }
}

document.getElementById("sendMessageBtn").addEventListener("click", async function () {
  const userInput = document.getElementById("chatInput").value;
  if (userInput.trim() === "") return;

  const chatOutput = document.getElementById("chatOutput");
  chatOutput.innerHTML += `<div class="user-message">${userInput}</div>`;

  const chatbotResponse = await sendMessageToChatbot(userInput);
  chatOutput.innerHTML += `<div class="bot-message">${chatbotResponse}</div>`;

  document.getElementById("chatInput").value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});
