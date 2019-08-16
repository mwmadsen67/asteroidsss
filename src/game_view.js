const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  const ga = new Game();
  setInterval(() => {
    ga.step();
    ga.draw(this.ctx);
  }, 20);
};


module.exports = GameView;