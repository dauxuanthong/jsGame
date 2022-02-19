const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const imageSize = {
  x: 2400,
  y: 700,
};

class BackgroundLayer {
  constructor(gameSpeed, image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = imageSize.x;
    this.height = imageSize.y;
    this.image = image;
    this.speedModifier = speedModifier;
    this.gameSpeed = gameSpeed;
    this.speed = this.gameSpeed * this.speedModifier;
  }
  update = (gameFrame) => {
    this.speed = this.gameSpeed * this.speedModifier;
    this.x = (gameFrame * this.speed) % this.width;
  };
  draw = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  };
}

export default BackgroundLayer;
