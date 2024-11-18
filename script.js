let size = 16;
let lightness = 70;
const grid = document.getElementById("Grid");
const changeBtn = document.getElementById("Change");
const clearBtn = document.getElementById("Clear");
let gridItems = document.querySelectorAll(".grid-element");

let boxes = (size) => {
    grid.innerHTML = "";
    const totalGirds = size * size;
    const gridSize = 500 / size;
    for (let i = 0; i < totalGirds; i++) {
        const grid_element = document.createElement("div");
        grid_element.className = "grid-element";
        grid_element.style.width = `${gridSize}px`;
        grid_element.style.height = `${gridSize}px`;
        grid.appendChild(grid_element);
    }
    gridItems = document.querySelectorAll(".grid-element");
    hover();
};

let hover = () => {
    lightness = lightness < 10 ? lightness - 8 : 70;
    gridItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            const hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
            const saturation = Math.floor(Math.random() * 50) + 50; // Random saturation between 0% and 100%
            const crStyle = getBackgroundColor(item);
            if (crStyle === "rgb(255, 255, 255)")
                item.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        });
    });
};

boxes(size);

clearBtn.addEventListener("click", () => {
    gridItems.forEach((item) => {
        item.style.backgroundColor = "white";
    });
});

changeBtn.addEventListener("click", () => {
    let newSize = prompt("Grid size? (16 => 16 x 16) <= 100 ", size);
    if (newSize === null) {
        return; // Do nothing if the user clicked Cancel
    }
    newSize = parseInt(newSize);

    // Validate the input
    if (isNaN(newSize) || newSize > 100 || newSize < 1) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    size = newSize;
    boxes(size);
});

function getBackgroundColor(element) {
    const style = window.getComputedStyle(element);
    return style.backgroundColor; // Returns computed background color in rgb() format
}
