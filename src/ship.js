const Util = require('./utils');
const MovingObject = require('./moving_object');

Util.inherits(Ship, MovingObject);

function Ship(pos, game) {
  MovingObject.call(this, pos);
  this.rad = Ship.RADIUS;
  this.color = Ship.COLOR;
  this.vel = [0,0];
  this.game = game;
}

Ship.RADIUS = 15;
Ship.COLOR = "#67EEFF";

Ship.prototype.relocate = function () {
  debugger;
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
};

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

module.exports = Ship;