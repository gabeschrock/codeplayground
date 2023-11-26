const canvas = document.getElementById("game");
if(!canvas)
    throw new Error("no canvas to draw on");

if(!(canvas instanceof HTMLCanvasElement))
    throw new TypeError("#game is not a <canvas> element");

const ctx  = canvas.getContext("2d");
const grav = Object.freeze({
    NONE:  0, // platforms
    UP:    1, // player
    DOWN:  2, // player, projectiles etc.
    LEFT:  3, // player
    RIGHT: 4  // player
});

class GameObject {
    ctx  = null;
    grav = grav.NONE;

    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    move() {
        if(!this.grav)
            return;
        switch (this.grav) {
            case 0:
        }
    }
}
