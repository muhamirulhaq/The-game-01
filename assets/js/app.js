import {Game} from "./Game.js";

const plane = document.querySelector(".plane");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
plane.style.left = "calc(50% - " + plane.offsetWidth/2 + "px)";

const game = new Game(plane, plane.offsetLeft, leftButton.offsetWidth * 2 - plane.offsetWidth - 10);
leftButton.onmousedown = game.toLeft;
leftButton.ontouchstart = game.toLeft;
leftButton.onmouseup = game.stop;
leftButton.ontouchend = game.stop;
rightButton.onmousedown = game.toRight;
rightButton.ontouchstart = game.toRight;
rightButton.onmouseup = game.stop;
rightButton.ontouchend = game.stop;