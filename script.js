async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (!message) return;

    displayMessage(message, "message");
    userInput.value = ""; // Clear the input field

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        displayMessage(data.response, "response");
    } catch (error) {
        console.error("Error:", error);
        displayMessage("Sorry, something went wrong.", "response");
    }
}

function displayMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.innerText = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

function navigateTo(page) {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById(`${page}-section`).classList.remove('hidden');
}

function sendMood(mood) {
    const moodMessages = {
        happy: "I'm feeling happy!",
        neutral: "I'm feeling neutral.",
        sad: "I'm feeling a bit down.",
    };
    sendMessage(moodMessages[mood]);
}
