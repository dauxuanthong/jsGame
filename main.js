import BackgroundLayer from "./backgroundLayer.js";
import Crosshair from "./Crosshair/crosshair.js";
import Canon from "./Canon/canon.js";
import Bullet from "./Bullet/bullet.js";
import Enemy from "./Enemy/enemy.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameFrame = 0;
let gameSpeed = 3;

let canvasPosition = canvas.getBoundingClientRect();
/*
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const dogImgUrl = "img/shadow_dog.png";
const dogImage = new Image();
dogImage.src = dogImgUrl;
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];

let playerState = "idle";

import { backgroundAnimate } from "./background.js";

animationStates.map((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(100, 50, 100, 100);
  // ctx.drawImage(img, sx,sy,sw,sh,dx,dy,dw,dh);
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(
    dogImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2
  );
  gameFrame++;
  requestAnimationFrame(animate);
};
// animate();
backgroundAnimate();
*/

//background image layers
const layer1Src = "img/layer-1.png";
const layer2Src = "img/layer-2.png";
const layer3Src = "img/layer-3.png";
const layer4Src = "img/layer-4.png";
const layer5Src = "img/layer-5.png";

const backgroundLayer1 = new Image();
backgroundLayer1.src = layer1Src;
const backgroundLayer2 = new Image();
backgroundLayer2.src = layer2Src;
const backgroundLayer3 = new Image();
backgroundLayer3.src = layer3Src;
const backgroundLayer4 = new Image();
backgroundLayer4.src = layer4Src;
const backgroundLayer5 = new Image();
backgroundLayer5.src = layer5Src;

const Layer1 = new BackgroundLayer(gameSpeed, backgroundLayer1, 0.2);
const Layer2 = new BackgroundLayer(gameSpeed, backgroundLayer2, 0.4);
const Layer3 = new BackgroundLayer(gameSpeed, backgroundLayer3, 0.6);
const Layer4 = new BackgroundLayer(gameSpeed, backgroundLayer4, 0.8);
const Layer5 = new BackgroundLayer(gameSpeed, backgroundLayer5, 1);

const gameLayers = [Layer1, Layer2, Layer3, Layer4, Layer5];

//enemy
const enemy = new Enemy();

//crosshair
let crosshairLocation = {
  x: 0,
  y: 0,
};
let exactMouseLocation = {
  x: 0,
  y: 0,
};

const crosshair = new Crosshair(crosshairLocation);

//Canon
let canonAngle = 0;
const canon = new Canon(canonAngle);

//Bullet
const mag = [];

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // gameLayers.forEach((layer) => {
  //   layer.update(gameFrame);
  //   layer.draw();
  // });
  // gameFrame--;

  // monster.reverse();
  // monster.update();
  enemy.revert();
  enemy.update(gameFrame);
  enemy.draw();

  // console.log(canon.canonAngleRad());
  mag.forEach((item) => {
    item.draw();
    item.update();
  });
  // bullet.draw();
  // bullet.update();
  canon.draw(exactMouseLocation);

  crosshair.update(crosshairLocation);
  crosshair.draw();
  console.log(gameFrame);
  gameFrame === 10 ? (gameFrame = 0) : (gameFrame = gameFrame);
  gameFrame++;

  requestAnimationFrame(animate);
};

animate();

window.addEventListener("click", (e) => {
  crosshairUpdate(e);
});
window.addEventListener("mousemove", (e) => {
  crosshairUpdate(e);
});
window.addEventListener("mousedown", (e) => {
  console.log("bang");
  bang();
});
window.addEventListener("mouseup", (e) => {
  console.log("stop shooting");
});

const crosshairUpdate = (e) => {
  crosshairLocation = {
    x: e.x - canvasPosition.left - 20,
    y: e.y - canvasPosition.top - 20,
  };

  exactMouseLocation = {
    x: e.x - canvasPosition.left,
    y: e.y - canvasPosition.top,
  };
};

const bang = () => {
  mag.push(new Bullet(canon.canonCenterLocation(), canon.canonAngleRad()));
};
