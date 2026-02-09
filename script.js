// Assign variables to DOM elements for each box in grid
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// Array of boxes to allow winning combinations to be checked by box indexes
const boxes = [
    box1, box2, box3,
    box4, box5, box6,
    box7, box8, box9
];

// Array of arrays representing all winning combinations
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left
    [2, 4, 6]  // Diagonal from bottom left
];

// Function that adds an X marker to the selected box, given that it is currently empty
const placeMark = (event) => {
    const selectedBox = event.target;

    if (!selectedBox.innerHTML) {
        selectedBox.innerHTML = "X";
    }

    checkForWin();
};

// Function that checks for a winning combination after a mark has been placed. setTimeout() function used to ensure the mark shows on screen before alert modal displays.
const checkForWin = () => {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;

        if (
            boxes[a].innerHTML &&
            boxes[a].innerHTML === boxes[b].innerHTML &&
            boxes[a].innerHTML === boxes[c].innerHTML
        ) {
            setTimeout(() => alert("You won!"), 0);
            location.reload();
            return;
        }
    }
};

// Event listeners added to each box in grid, placeMark() function called if clicked
box1.addEventListener("click", placeMark);
box2.addEventListener("click", placeMark);
box3.addEventListener("click", placeMark);
box4.addEventListener("click", placeMark);
box5.addEventListener("click", placeMark);
box6.addEventListener("click", placeMark);
box7.addEventListener("click", placeMark);
box8.addEventListener("click", placeMark);
box9.addEventListener("click", placeMark);