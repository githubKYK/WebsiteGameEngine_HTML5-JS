canvasInit();
// Resources
var row = 20;
var col;
var rectSize = canvas.height / row;
col = parseInt(canvas.width / rectSize);
console.log(col);

var bgRect = new Image(rectSize, rectSize);
bgRect.src = imagePath("rect.png");

var XbgRect = new Image(rectSize, rectSize);
XbgRect.src = imagePath("Xrect.png");

var r_char = new Image(rectSize, rectSize);
r_char.src = imagePath("boomChar.png");

// game variable

var arrBg = new Array(row);
let l = 0,
  t = 0;
for (let i = 0; i < row; i++) {
  arrBg[i] = new Array(col);
  for (let j = 0; j < col; j++) {
    if (j == col - 1 || j == 0 || i == 0 || i == row - 1) {
      arrBg[i][j] = new Element(XbgRect, l, t, rectSize, rectSize, 0);
    } else {
      arrBg[i][j] = new Element(bgRect, l, t, rectSize, rectSize, 0);
    }
    l += rectSize;
  }
  l = 0;
  t += rectSize;
}

var char = new Element(r_char, 0, 0, rectSize, rectSize, 1);
var charSpeed = 20;
//game

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case LEFT: {
      if (char.dirX == 1) char.flip("x");
      char.x -= charSpeed;
      break;
    }
    case RIGHT: {
      if (char.dirX == -1) char.flip("x");
      char.x += charSpeed;
      break;
    }
    case UP: {
      char.y -= charSpeed;
      break;
    }
    case DOWN: {
      char.y += charSpeed;
      break;
    }
  }
});

function gameLoop() {
  drawUI();
}

function run() {
  setInterval(() => {
    gameLoop();
  }, 1);
}

run();
