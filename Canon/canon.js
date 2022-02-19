const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 700;
const boxWidth = 100;
const boxHeight = 100;
const leftAlign = canvasWidth / 2 - boxWidth / 2;
const topAlign = canvasHeight - boxHeight - 10;

const canonCenterLocation = {
  x: canvasWidth / 2,
  y: canvasHeight - boxHeight / 2,
};

const canon = new Image();
canon.src = "./img/canon.png";
const canonX = 840;
const canonT = 859;

class Canon {
  constructor(angle) {
    this.x = leftAlign;
    this.y = topAlign;
    this.BoxX = boxWidth;
    this.BoxY = boxHeight;
    this.angle = angle;
  }

  canonCenterLocation = () => {
    return canonCenterLocation;
  };

  canonAngleRad = () => {
    return this.angle - 1.5707963268;
  };

  draw = (angle) => {
    ctx.save();
    ctx.translate(canonCenterLocation.x, canonCenterLocation.y);
    this.angle = Math.atan2(angle.x - canonCenterLocation.x, -(angle.y - canonCenterLocation.y));
    ctx.rotate(this.angle);
    ctx.drawImage(canon, 0, 0, canonX, canonT, -50, -50, this.BoxX, this.BoxY);
    ctx.restore();
  };
}

export default Canon;
