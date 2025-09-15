/* ------------------------------
   Part 2: JavaScript Functions
--------------------------------- */

// Global scope variable
let isAnimating = false;

// Function with parameter and return value
function squareNumber(num) {
  // local scope variable
  let result = num * num;
  return result;
}

// Event listener for calculation
document.getElementById("calcBtn").addEventListener("click", () => {
  let number = 5;
  let squared = squareNumber(number); // call function with parameter
  document.getElementById("calcResult").textContent =
    `${number}² = ${squared}`;
});


/* ------------------------------
   Part 3: Combining JS + CSS
--------------------------------- */

// Function to toggle animation on a box
function toggleAnimation(elementId) {
  const element = document.getElementById(elementId);

  if (!isAnimating) {
    element.classList.add("animate");
    isAnimating = true;
    return "Animation started!";
  } else {
    element.classList.remove("animate");
    isAnimating = false;
    return "Animation stopped!";
  }
}

// Event listener triggers toggle function
document.getElementById("animateBtn").addEventListener("click", () => {
  let message = toggleAnimation("animateBox"); // function with return value
  console.log(message);
});
