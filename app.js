
window.onload = () => {
    const CANVAS = document.querySelector('.canvas');
    const WIDTH = document.querySelector('#width');
    const HEIGHT = document.querySelector('#height');
    const BUTTON = document.querySelector('#submit');
    const COLOR_PICKER = document.querySelector('#color-picker');
    const COLOR_MENU = document.querySelector('.color-menu');
    const COLOR_PALETTE = ["1a1c2c", "5d275d", "b13e53", "ef7d57",
                        "ffcd75", "a7f070", "38b764", "257179",
                        "29366f", "3b5dc9", "41a6f6", "73eff7",
                        "f4f4f4", "94b0c2", "566c86", "333c57"]

    //init canvas creation
    for(i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        CANVAS.appendChild(square);
    }

    //color menu creation
    for(i = 0; i < COLOR_PALETTE.length; i++) {
        let square = document.createElement('div');
        square.classList.add('color');
        square.style.backgroundColor = "#" + COLOR_PALETTE[i];
        square.dataset.color = "#" + COLOR_PALETTE[i];
        if(COLOR_PALETTE[i] == "3b5dc9") {square.classList.add('current');}
        COLOR_MENU.appendChild(square);
    }

    //color menu picker
    COLOR_MENU.addEventListener("click", (e) => {
        let target = e.target;
        if (!target.classList.contains('color-menu')) {
            COLOR_PICKER.value = target.dataset.color;
            document.querySelector('.current').classList.remove('current');
            target.classList.add('current');
            BUTTON.style.backgroundColor = COLOR_PICKER.value;
        }
    });

    //canvas painter
    CANVAS.addEventListener("mouseover", (e) => {
        let target = e.target;
        if (!target.classList.contains('canvas')) {
            target.style.backgroundColor = COLOR_PICKER.value;
        }
    });

    BUTTON.addEventListener("click", (e) => {
        createCanvas();
    });

    function createCanvas() {
        CANVAS.innerHTML = '';
        let canvW = WIDTH.value;
        let canvH = HEIGHT.value;
        for(i = 0; i < (canvW * canvH); i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            CANVAS.appendChild(square);
        }
        CANVAS.style.gridTemplateColumns = `repeat(${canvW}, 1fr)`;
        CANVAS.style.gridTemplateRows = `repeat(${canvH}, 1fr)`;
    }

    COLOR_PICKER.addEventListener("input", (e) => {
        BUTTON.style.backgroundColor = COLOR_PICKER.value;
    });
}