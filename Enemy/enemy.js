const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 700;
const boxWidth = 93;
const boxHeight = 55;

const dumbEnemy = new Image();
dumbEnemy.src = "./img/enemy1.png";
const dumbEnemyX = 293;
const dumbEnemyY = 155;

let currentFrame = 0;

class Enemy {
  constructor() {
    this.x = Math.floor(Math.random() * (CANVAS_WIDTH - boxWidth)) + 1;
    this.y = Math.floor(Math.random() * 250) + 1;
    this.speed = Math.floor(Math.random() * 6) + 1;
    this.boxX = boxWidth;
    this.boxY = boxHeight;
    this.direction = (Math.floor(Math.random() * 10) + 1) % 2 === 0 ? 1 : -1;
  }

  revert = () => {
    if (this.x <= 0) {
      this.direction = 1;
    }
    if (this.x + this.boxX >= 800) {
      this.direction = -1;
    }
  };
  update = (frame) => {
    if (frame % 2 === 0) {
      currentFrame >= 5 ? (currentFrame = 0) : currentFrame++;
    }
    this.x = this.x + this.speed * this.direction;
  };
  draw = () => {
    ctx.drawImage(
      dumbEnemy,
      dumbEnemyX * currentFrame,
      0,
      dumbEnemyX,
      dumbEnemyY,
      this.x,
      this.y,
      this.boxX,
      this.boxY
    );
  };
}

export default Enemy;
