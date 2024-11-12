
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

function addFloatingEmoji() {
    const emojis = ["😊", "😇", "🌸", "💫"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const emojiElement = document.createElement("div");
    emojiElement.className = "floating-emoji";
    emojiElement.style.left = Math.random() * 100 + "vw";
    emojiElement.style.animationDuration = Math.random() * 2 + 4 + "s";
    emojiElement.textContent = emoji;
    document.querySelector(".chat-box").appendChild(emojiElement);

    setTimeout(() => emojiElement.remove(), 5000); // Clean up emojis
}

setInterval(addFloatingEmoji, 2000); // Add emojis every 2 seconds


// function createBurstingConfetti(x, y) {
//     const colors = ["#e4c1f9", "#b794f4", "#8f78b2", "#af8ee9"];
//     for (let i = 0; i < 30; i++) { // 30 pieces for a fuller burst effect
//         const confetti = document.createElement('div');
//         confetti.className = 'confetti';
//         confetti.style.left = `${x}px`;
//         confetti.style.top = `${y}px`;
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         confetti.style.width = `${Math.random() * 6 + 4}px`; // Random size
//         confetti.style.height = confetti.style.width;

//         // Randomly assign each piece a pop-off direction
//         confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
        
//         document.body.appendChild(confetti);

//         // Remove confetti after animation
//         setTimeout(() => confetti.remove(), 1000);
//     }
// }

// // Attach the bursting confetti to button clicks
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', (e) => {
//         createBurstingConfetti(e.clientX, e.clientY);
//     });
// });
function createBurstingConfetti(x, y) {
    const colors = ["#e4c1f9", "#b794f4", "#8f78b2", "#af8ee9", "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
    for (let i = 0; i < 30; i++) { // 30 pieces for a fuller burst effect
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 6 + 4}px`; // Random size between 4px and 10px
        confetti.style.height = confetti.style.width;

        // Assign each piece a random pop-off direction
        confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 1000);
    }
}

// Attach the bursting confetti effect to button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        createBurstingConfetti(e.clientX, e.clientY);
    });
});
// START CODE
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));

    // Show the specified section
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}

// Example function to handle the sign-in form submission
function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Placeholder for sign-in logic (e.g., sending credentials to a server)
    console.log("Sign-In Submitted:", email, password);
    
    // Temporary: Show an alert or navigate to another section after sign-in
    alert("Signed in successfully!");
    navigateTo('main-journaling'); // Redirect to the main journaling section
}

// END CODE
