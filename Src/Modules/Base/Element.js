class Element {
  constructor(img, x, y, width, height, layer = 0) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dirX = 1;
    this.dirY = 1;
    this.layer = layer;

    if (!Array.isArray(canvasUI[layer])) {
      canvasUI[layer] = new Array();
    }
    canvasUI[layer].push(this);
  }

  changeResources(image) {
    this.img = image;
  }

  update(x, y, width = null, height = null) {
    if (width != null || height != null) {
      let newW = width != null ? width : this.width;
      let newH = height != null ? height : this.height;
      this.resize(newW, newH);
    }
    this.x = x;
    this.y = y;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.img.width = this.width;
    this.img.height = this.height;
  }

  flip(direction) {
    ctx.save();
    if (direction == "x" || direction == "X") this.dirX = -this.dirX;
    if (direction == "y" || direction == "Y") this.dirY = -this.dirY;

    console.log(this.dirX);
  }

  draw() {
    ctx.save();
    let tx = 0,
      ty = 0;
    if (this.dirX == -1) tx = 2 * (this.x + this.width / 2);
    if (this.dirY == -1) ty = 2 * (this.y + this.height / 2);

    ctx.translate(tx, ty);
    ctx.scale(this.dirX, this.dirY);

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.restore();
  }

  mouseOn(mx, my) {
    return this.x <= mx && this.x + this.width >= mx && this.y <= my && this.y + this.height >= my;
  }

  hover(callback) {
    callback(this);
  }

  click(callback) {
    callback(this);
  }

  move(callback) {
    callback(this);
  }
}
