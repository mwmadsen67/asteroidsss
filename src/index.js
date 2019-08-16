
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view");


document.addEventListener('DOMContentLoaded', () => {
  console.log("webpack!");
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  // window.MovingObject = MovingObject;
  // window.Asteroid = Asteroid;
  // const mo = new MovingObject(
  //   [50, 50], [200, 200], 50, "#00FF00"
  // );
  // const as = new Asteroid([30, 30]);
  // as.draw(ctx);
  // mo.move();
  // mo.draw(ctx);

  window.GameView = GameView;
  const ga = new GameView(ctx);
  ga.start();
});

// game.js: 25 Uncaught TypeError: Failed to execute 'clearRect' 
// on 'CanvasRenderingContext2D': 4 arguments required, but only 0 present.