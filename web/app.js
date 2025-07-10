const paletteContainer = document.getElementById("palette-container");
const generateBtn = document.getElementById("generate-btn");

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette(count = 5) {
    paletteContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const color = generateRandomColor();
        const block = document.createElement("div");
        block.className = "color-block";
        block.style.backgroundColor = color;
        block.title = "Clique para copiar";

        const code = document.createElement("div");
        code.className = "color-code";
        code.innerText = color;

        block.appendChild(code);
        block.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            alert(`Cor ${color} copiada!`);
        });

        paletteContainer.appendChild(block);
    }
}

generateBtn.addEventListener("click", () => generatePalette());
generatePalette();
