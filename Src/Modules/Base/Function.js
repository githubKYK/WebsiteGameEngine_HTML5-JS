function canvasInit() {
  ctx.imageSmoothingEnabled = false;
  canvasInitSize();
}

function canvasInitSize() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

function drawUI() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvasUI.forEach((layer) => {
    layer.forEach((element) => {
      element.draw();
    });
  });
}

function min(arr) {
  let m = arr[0];
  arr.forEach((e) => {
    if (e < m) m = e;
  });
  return m;
}
