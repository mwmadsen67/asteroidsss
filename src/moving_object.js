function MovingObject (pos, vel, rad, color, game) {
  this.pos = pos;
  this.vel = vel;
  this.rad = rad;
  this.color = color;
  this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.rad,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let rad_sum = this.rad + otherObject.rad;
  let dist = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) +
   Math.pow(this.pos[1] - otherObject.pos[1], 2));

  if (rad_sum > dist) return true;
  return false;
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  // this.game.remove(this);
};

module.exports = MovingObject;