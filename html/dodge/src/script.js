let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
function img(src) {
    let rtrn = document.createElement('img');
    rtrn.src = src;
    return rtrn;
}
const canvasWidth = 300;
const canvasHeight = 300;
const playerY = canvasHeight * 3 / 4;
let player = {
    image: img('images/player.png'),
    x: 142,
    changeX:function(amount){
        this.x+=amount;
        this.x=Math.max(Math.min(this.x,canvasWidth-16),0)
    }
}
let ticks = 0;
function draw() {
    ctx.clearRect(0,0,300,300);
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,300,300);
    ctx.drawImage(player.image, player.x, playerY);
}
function tick() {
    player.changeX(heldDown.ArrowLeft?-10:0);
    player.changeX(heldDown.ArrowRight?10:0);
    ctx.clearRect(0,0,300,300);
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,300,300);
    ctx.drawImage(player.image, player.x, playerY);
    window.setTimeout(tick, 1000/60);
}
let heldDown={};
tick();
window.addEventListener('keydown',(key)=>{heldDown[key.key]=true})
window.addEventListener('keyup', (key)=>{delete heldDown[key.key]})
