canvasInit();
// Variable
var imagePath = "../../Resources/Images/";
var gameSize = min([canvas.width, canvas.height]);
var rectSize = gameSize / 10;
var xImg_rect = new Image(rectSize, rectSize);
xImg_rect.src = imagePath + "Xrect.png";
var oImg_rect = new Image(rectSize, rectSize);
oImg_rect.src = imagePath + "Orect.png";
var img_rect = new Image(rectSize, rectSize);
img_rect.src = imagePath + "rect.png";

var cr = xImg_rect;

var l = 0;
var t = 0;
let row = parseInt(canvas.width / rectSize);
let col = 10;
var bg = new Array(row);

for (let i = 0; i < row; i++) {
  bg[i] = new Array(col);
  for (let j = 0; j < col; j++) {
    bg[i][j] = new Element(ctx, img_rect, l, t, rectSize, rectSize);
    t += rectSize;
  }
  t = 0;
  l += rectSize;
}
// Function
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {}

function draw() {
  drawUI();
}

function move(e) {
  switch (e.keyCode) {
    case LEFT: {
      console.log(12312);
      break;
    }
    case RIGHT: {
      break;
    }
    case UP: {
      break;
    }
    case DOWN: {
      document.removeEventListener("keydown", move, true);
      break;
    }
  }
}

function gameLoop() {
  clear();
  update();
  draw();
}

function main() {
  setInterval(() => {
    gameLoop();
  }, loopSpeed);
  console.log(canvasUI);
}

document.addEventListener("keydown", move, true);

main();

function getRect() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (bg[i][j].mouseOn(mouse.x, mouse.y)) {
        return {
          i,
          j,
        };
      }
    }
  }
  return null;
}

document.addEventListener("click", (e) => {
  let ij = getRect();
  if (ij == null) return;
  if (bg[ij.i][ij.j].img != img_rect) return;
  bg[ij.i][ij.j].changeResources(cr);
  if (cr == xImg_rect) cr = oImg_rect;
  else cr = xImg_rect;
});

canvas.addEventListener("mousedown", (e) => {
  let oldmouse = mouse;
  canvas.translate(
    -Math.round(mouse.x - oldmouse.x),
    -Math.round(mouse.y - oldmouse.y)
  );
});
