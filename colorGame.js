
var gridSize = 6;
var colors = generateRandomColors(gridSize);
var squares = document.querySelectorAll(".square");

var pickedColor = getRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

for (var i = 0; i < squares.length; i++) {
    //adding initial colors
    squares[i].style.backgroundColor = colors[i];

    //adding event listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct choice.";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again.";
        }
    });
}

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    gridSize = 3;
    init();
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    gridSize = 6;
    init();
});


resetBtn.addEventListener("click", function () {
    init();
});

function init() {
    colors = generateRandomColors(gridSize);
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    pickedColor = getRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Color";
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function getRandomColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateRandomColors(size) {
    var colors = [];
    for (var i = 0; i < size; i++) {
        colors[i] = randomColor();
    }
    return colors;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + blue + ", " + green + ")";
}