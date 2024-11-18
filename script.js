let size = 16;
const container = document.getElementById("Boxes");

(() => {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "boxes-row";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.className = "boxes-col";
            row.appendChild(col);
        }
    }
})();
S;
