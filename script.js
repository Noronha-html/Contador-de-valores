let number = document.getElementById("number");

let value = 0;

let minusOne = document.getElementById("minusOne")
.addEventListener("click", SubtractOne => {
    let newNumber = value - 1;

    if(newNumber < 0)
    {
        newNumber = 0;
    }

    value = newNumber;

    number.innerHTML = newNumber;
});

let plusOne = document.getElementById("plusOne")
.addEventListener("click", addOne => {
    let newNumber = value + 1;

    value = newNumber;

    number.innerHTML = newNumber;
});