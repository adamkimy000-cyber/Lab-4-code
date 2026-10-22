// 1. Select paragraph and button using DOM selection methods[cite: 7, 8]
const messagePara = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// 2. Define function named changeMessage() that replaces text with "Hello there!"[cite: 7, 8]
function changeMessage() {
    messagePara.textContent = "Hello there!";
}

// 3. Attach changeMessage to button using addEventListener[cite: 7, 8]
changeBtn.addEventListener("click", changeMessage);