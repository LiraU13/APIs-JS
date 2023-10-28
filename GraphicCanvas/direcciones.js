const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let direction = 1; // 1 - Right, 2 - Down, 3 - Left, 4 - Up

let posX = 0;
let posY = 1;

function pollo(x,y){
    ctx.font = '50px Serif';
    ctx.fillText('🐤', x * 20, y * 20);
}

const comida = [];
for(let i = 0; i < 20; i++){
    const maiz = {
        x: Math.round(Math.random() * 20),
        y: Math.round(Math.random() * 13),
        pinta: function (){
            if (!this.comido){
            ctx.font = '40px Serif';
            ctx.fillText('🌽', this.x * 20, this.y * 20);
            }
        },
        comido: false
    }
    comida.push(maiz);
}

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    pollo(posX, posY);
    comida.forEach(maiz => {
        if (maiz.x === posX && maiz.y === posY) {
            maiz.comido = true;
        }
    })
    comida.forEach(maiz => maiz.pinta());
    switch (direction) {
        case 1:
            posX++;
            break;
        case 2:
            posY++;
            break;
        case 3:
            posX--;
            break;
        case 4:
            posY--;
            break;
    }
    if(posX > 400) {
        direction = 3;
        posX = 400;
    }
    if(posX < 0) {
        direction = 1;
        posX = 0;
    }
    if(posY > 400) {
        direction = 4;
        posY = 400;
    }
    if(posY < 1) {
        direction = 2;
        posY = 1;
    }
}, 100)

document.querySelector('body').addEventListener('keydown', (e) => {
    e.preventDefault();
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break;
        case 'ArrowLeft':
            direction = 3;
            break;
        case 'ArrowUp':
            direction = 4;
            break;
    }
})