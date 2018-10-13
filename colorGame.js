
var gridSize = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#newColor");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
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
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //this.textContent === "Easy" ? gridSize = 3 : gridSize = 6; - use of turnery op.
            if (this.textContent === "Easy") {
                gridSize = 3;
            } else {
                gridSize = 6;
            }
            reset();
        });
    }

}

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
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