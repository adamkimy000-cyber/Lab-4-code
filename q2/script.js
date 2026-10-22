// Step 3.1: Select DOM elements using document.getElementById
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultPara = document.getElementById("result");

// Step 3.2: Define the checkInput() function
function checkInput() {
    // Read input and remove leading/trailing whitespace
    const rawValue = userInput.value.trim();

    // Check if input is empty or whitespace-only
    if (rawValue === "") {
        resultPara.textContent = "Please enter a valid number!";
        return;
    }

    // Convert numeric string to number
    const num = Number(rawValue);

    // Use if...else if...else structure to validate and display appropriate message
    if (isNaN(num)) {
        resultPara.textContent = "Please enter a valid number!";
    } else if (num < 10) {
        resultPara.textContent = "The number is lower than 10";
    } else if (num > 10) {
        resultPara.textContent = "The number is higher than 10";
    } else {
        resultPara.textContent = "The number is equal to 10";
    }
}

// Step 3.3: Register click event with addEventListener
checkBtn.addEventListener("click", checkInput);