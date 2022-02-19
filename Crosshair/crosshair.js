const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const boxWith = 40;
const boxHeight = 40;

const crosshair = new Image();
crosshair.src = "./img/crosshair.png";
const crosshairX = 200;
const crosshairY = 200;

class Crosshair {
  constructor(crosshairLocation) {
    this.x = crosshairLocation.x;
    this.y = crosshairLocation.y;
    this.BoxX = boxWith;
    this.BoxY = boxHeight;
  }
  update = (crosshairLocation) => {
    this.x = crosshairLocation.x;
    this.y = crosshairLocation.y;
  };
  draw = () => {
    ctx.drawImage(crosshair, 0, 0, crosshairX, crosshairY, this.x, this.y, this.BoxX, this.BoxY);
  };
}

export default Crosshair;
