const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  this.game = new Game();
  this.bindKeyHandlers();
  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  const ship = this.game.ship;
  key("w", function () { ship.power([0, -1]) });
  key("a", function () { ship.power([-1, 0]) });
  key("s", function () { ship.power([0, 1]) });
  key("d", function () { ship.power([1, 0]) });
};


module.exports = GameView;