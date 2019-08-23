const GameView = require("./game_view");


document.addEventListener('DOMContentLoaded', () => {
  console.log("webpack!");
  const canvas = document.getElementById("game-canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  window.GameView = GameView;
  const ga = new GameView(ctx);
  ga.start();
});

// game.js: 25 Uncaught TypeError: Failed to execute 'clearRect' 
// on 'CanvasRenderingContext2D': 4 arguments required, but only 0 present.