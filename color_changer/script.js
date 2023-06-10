// Changes background to green and updates the secondary header
const changeBackgroundColor = () => {
    const target = document.body;
    target.style.backgroundColor = "green";

    const secondHeader = document.getElementById('second');
    secondHeader.innerHTML = "Background Color: Green";
};

// Changes background back to red and resets the secondary header to original value
const resetPage = () => {
    const target = document.body;
    target.style.backgroundColor = "red";

    const secondHeader = document.getElementById("second");
    secondHeader.innerHTML = "Background Color: Red";
}