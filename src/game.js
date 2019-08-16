const Asteroid = require('./asteroid');

const asteroids = [];

function Game() {
  this.addAsteroids();
}

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 25;

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; ++i) {
    let rand_x = Math.floor(Math.random() * Game.DIM_X);
    let rand_y = Math.floor(Math.random() * Game.DIM_Y);
    asteroids.push(
      new Asteroid( [rand_x, rand_y], this )
    );
  }

};

Game.prototype.draw = function(ctx) {

  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  asteroids.forEach( asteroid => asteroid.draw(ctx) );
};

Game.prototype.moveObjects = function() {
  asteroids.forEach( asteroid => asteroid.move());
};

Game.prototype.wrap = function(pos) {
  if (pos[0] < 0) {
    pos[0] = 800;
  } else if (pos[0] > 800) { 
    pos[0] = 0;
  }
  if (pos[1] < 0) {
    pos[1] = 800;
  } else if (pos[1] > 800) { 
    pos[1] = 0;
  }
  return pos;
};

Game.prototype.checkCollisions = function() {
  for(let i = 0; i < asteroids.length; ++i) {
    let as1 = asteroids.shift();
    let collided = false;
    asteroids.forEach(asteroid => {
      if (as1.isCollidedWith(asteroid)) {
        as1.collideWith(asteroid);
        collided = true;
      };
    });
    if (!collided) asteroids.push(as1);
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  let idx = asteroids.indexOf(asteroid);
  asteroids.splice(idx, 1);
}
module.exports = Game;