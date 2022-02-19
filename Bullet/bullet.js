const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 700;
const boxWidth = 30;
const boxHeight = 20;

const bullet = new Image();
bullet.src = "./img/bullet.png";
const bulletX = 860;
const bulletY = 513;

class Bullet {
  constructor(location, angle) {
    this.x = location.x;
    this.y = location.y;
    this.dx = Math.cos(angle) * 7;
    this.dy = Math.sin(angle) * 7;
    this.BoxX = boxWidth;
    this.BoxY = boxHeight;
  }
  position = () => {
    return {
      TRx: this.x + this.BoxX,
      TRy: this.y,
      BLx: this.x,
      BLy: this.y + this.BoxY,
    };
  };
  update = () => {
    this.x += this.dx;
    this.y += this.dy;
  };
  draw = () => {
    ctx.drawImage(
      bullet,
      0,
      0,
      bulletX,
      bulletY,
      this.x - this.BoxX / 2,
      this.y - this.BoxY / 2,
      this.BoxX,
      this.BoxY
    );
  };
}

export default Bullet;
