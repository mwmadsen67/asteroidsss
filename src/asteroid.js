const Util = require('./utils');
const MovingObject = require('./moving_object');

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos, game) {
  MovingObject.call(this, pos);
  let rand_x = Math.floor((Math.random() - 0.5) * 10);
  let rand_y = Math.floor((Math.random() - 0.5) * 10);
  this.vel = [rand_x ? rand_x : 1, rand_y ? rand_y : -1];
  this.rad = Asteroid.RADIUS;
  this.color = Asteroid.COLOR;
  this.game = game;
}

Asteroid.COLOR = "#500FDB";
Asteroid.RADIUS = 25;

module.exports = Asteroid;


