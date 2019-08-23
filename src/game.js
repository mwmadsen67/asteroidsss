const Asteroid = require('./asteroid');
const Ship = require('./ship');

const asteroids = [];
const objects = [];

function Game() {
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(), this);
  this.allObjects();
}

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; ++i) {
    asteroids.push(
      new Asteroid(this.randomPosition(), this )
    );
  }
};

Game.prototype.allObjects = function() {
  asteroids.forEach(el => objects.push(el));
  objects.push(this.ship);
};

Game.prototype.randomPosition = function() {
  let rand_x = Math.floor(Math.random() * Game.DIM_X);
  let rand_y = Math.floor(Math.random() * Game.DIM_Y);
  return [rand_x, rand_y];  
};

Game.prototype.draw = function(ctx) {

  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = ("black");
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  objects.forEach( obj => obj.draw(ctx) );
};

Game.prototype.moveObjects = function() {
  objects.forEach( obj => obj.move());
};

Game.prototype.wrap = function(pos) {
  if (pos[0] < 0) {
    pos[0] = Game.DIM_X;
  } else if (pos[0] > Game.DIM_X) { 
    pos[0] = 0;
  }
  if (pos[1] < 0) {
    pos[1] = Game.DIM_Y;
  } else if (pos[1] > Game.DIM_Y) { 
    pos[1] = 0;
  }
  return pos;
};

Game.prototype.checkCollisions = function() {
  for(let i = 0; i < objects.length; ++i) {
    let obj1 = objects.shift();
    // let collided = false;
    objects.forEach(object => {
      if (obj1.isCollidedWith(object)) {
        obj1.collideWith(object);
        // collided = true;
      }
    });
    objects.push(obj1);
    // if (!collided) objects.push(obj1);
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(object) {
  let idx = objects.indexOf(object);
  objects.splice(idx, 1);
};

module.exports = Game;