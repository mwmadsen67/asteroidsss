/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(pos, game) {\n  MovingObject.call(this, pos);\n  let rand_x = Math.floor((Math.random() - 0.5) * 10);\n  let rand_y = Math.floor((Math.random() - 0.5) * 10);\n  this.vel = [rand_x ? rand_x : 1, rand_y ? rand_y : -1];\n  this.rad = Asteroid.RADIUS;\n  this.color = Asteroid.COLOR;\n  this.game = game;\n}\n\nAsteroid.COLOR = \"#500FDB\";\nAsteroid.RADIUS = 25;\n\nmodule.exports = Asteroid;\n\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst asteroids = [];\n\nfunction Game() {\n  this.addAsteroids();\n}\n\nGame.DIM_X = 800;\nGame.DIM_Y = 800;\nGame.NUM_ASTEROIDS = 25;\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; ++i) {\n    let rand_x = Math.floor(Math.random() * Game.DIM_X);\n    let rand_y = Math.floor(Math.random() * Game.DIM_Y);\n    asteroids.push(\n      new Asteroid( [rand_x, rand_y], this )\n    );\n  }\n\n};\n\nGame.prototype.draw = function(ctx) {\n\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  asteroids.forEach( asteroid => asteroid.draw(ctx) );\n};\n\nGame.prototype.moveObjects = function() {\n  asteroids.forEach( asteroid => asteroid.move());\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] < 0) {\n    pos[0] = 800;\n  } else if (pos[0] > 800) { \n    pos[0] = 0;\n  }\n  if (pos[1] < 0) {\n    pos[1] = 800;\n  } else if (pos[1] > 800) { \n    pos[1] = 0;\n  }\n  return pos;\n};\n\nGame.prototype.checkCollisions = function() {\n  for(let i = 0; i < asteroids.length; ++i) {\n    let as1 = asteroids.shift();\n    let collided = false;\n    asteroids.forEach(asteroid => {\n      if (as1.isCollidedWith(asteroid)) {\n        as1.collideWith(asteroid);\n        collided = true;\n      };\n    });\n    if (!collided) asteroids.push(as1);\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n  let idx = asteroids.indexOf(asteroid);\n  asteroids.splice(idx, 1);\n}\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  const ga = new Game();\n  setInterval(() => {\n    ga.step();\n    ga.draw(this.ctx);\n  }, 20);\n};\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"webpack!\");\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  // window.MovingObject = MovingObject;\n  // window.Asteroid = Asteroid;\n  // const mo = new MovingObject(\n  //   [50, 50], [200, 200], 50, \"#00FF00\"\n  // );\n  // const as = new Asteroid([30, 30]);\n  // as.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n\n  window.GameView = GameView;\n  const ga = new GameView(ctx);\n  ga.start();\n});\n\n// game.js: 25 Uncaught TypeError: Failed to execute 'clearRect' \n// on 'CanvasRenderingContext2D': 4 arguments required, but only 0 present.\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (pos, vel, rad, color, game) {\n  this.pos = pos;\n  this.vel = vel;\n  this.rad = rad;\n  this.color = color;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.rad,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let rad_sum = this.rad + otherObject.rad;\n  let dist = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) +\n   Math.pow(this.pos[1] - otherObject.pos[1], 2));\n\n  if (rad_sum > dist) return true;\n  return false;\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  this.game.remove(otherObject);\n  // this.game.remove(this);\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });