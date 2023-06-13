// Changes the text color based on numerical value of innerHTML
const determineColor = (num, id) => {
    if (num > 0) {
        document.getElementById(id).style.color = "green";
    } else if (num < 0) {
        document.getElementById(id).style.color = "red";
    } else {
        document.getElementById(id).style.color = "black";
    }
}

// Increases number by 1
const increaseNumber = () => {
    let counterNumber = Number(document.getElementById("number").innerHTML);
    counterNumber = counterNumber + 1;
    document.getElementById("number").innerHTML = counterNumber;

    determineColor(counterNumber, "number");
};

// Decreases number by 1
const decreaseNumber = () => {
    let counterNumber = Number(document.getElementById("number").innerHTML);
    counterNumber = counterNumber - 1;
    document.getElementById("number").innerHTML = counterNumber;

    determineColor(counterNumber, "number");
};

// Resets number back to 0
const resetNumber = () => {
    let counterNumber = Number(document.getElementById("number").innerHTML);
    counterNumber = 0;
    document.getElementById("number").innerHTML = counterNumber;

    determineColor(counterNumber, "number");

};