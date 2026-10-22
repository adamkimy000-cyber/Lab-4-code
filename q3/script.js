// Step 3.1: Select DOM elements
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Step 3.2: Define generateNumbers() function
function generateNumbers() {
    // Clear existing list items to prevent duplicates on repeated clicks
    numberList.textContent = "";

    // For loop iterating from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // Create <li> element, set textContent, and append to list
        const li = document.createElement("li");
        li.textContent = `The number is ${i}`;
        numberList.appendChild(li);
    }
}

// Step 3.3: Attach event listener to button[cite: 7]
generateBtn.addEventListener("click", generateNumbers);