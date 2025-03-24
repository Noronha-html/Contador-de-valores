let screen = document.getElementById("screen");

let value = 0;

let minusOne = document.getElementById("minusOne")
.addEventListener("click", SubtractOne => {
    let newScreen = value - 1;

    if(newScreen < 0)
    {
        newScreen = 0;
    }

    value = newScreen;

    screen.innerHTML = newScreen;
});

let plusOne = document.getElementById("plusOne")
.addEventListener("click", addOne => {
    let newScreen = value + 1;

    value = newScreen;

    screen.innerHTML = newScreen;
});