const changeToDarkMode = () => {
    // changing the page background to dark blue
    const backdrop = document.body;
    backdrop.style.backgroundColor = "#0A2647";

    // changing the secondary header text and color to white
    const secondaryHeader = document.getElementById("secondary-header");
    secondaryHeader.innerHTML = "Dark Mode: On";
    secondaryHeader.style.color = "white";

    // changing the main header color to white
    const mainHeader = document.getElementById("main-header");
    mainHeader.style.color = "white";

    // editing the box to be a lighter blue and text to white
    const bodyBox = document.getElementById("body-div");
    bodyBox.style.backgroundColor = "#144272";
    bodyBox.style.borderColor = "white";
};

// Resets the page back to normal. Opposite of changeToDarkMode()
const resetPage = () => {
    const backdrop = document.body;
    backdrop.style.backgroundColor = "white";

    const secondaryHeader = document.getElementById("secondary-header");
    secondaryHeader.innerHTML = "Dark Mode: Off";
    secondaryHeader.style.color = "black";

    const mainHeader = document.getElementById("main-header");
    mainHeader.style.color = "black";

    const bodyBox = document.getElementById("body-div");
    bodyBox.style.backgroundColor = "white";
    bodyBox.style.borderColor = "black";
}

// Function to listen for loaded DOM page event
// Change to dark mode or reset based on toggle switch
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector("input[type='checkbox']");

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            changeToDarkMode();
        } else {
            resetPage();
        }
    });
});