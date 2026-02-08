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

// Function that adds an X marker to the selected box, given that it is currently empty
const placeMark = (event) => {
    const selectedBox = event.target;

    if (!selectedBox.innerHTML) {
        selectedBox.innerHTML = "X";
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