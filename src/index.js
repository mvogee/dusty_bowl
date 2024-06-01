const map = document.querySelector("#map");
const player = document.querySelector("#player");
const interval = setInterval(gameFrame, 25);

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);

const MAXTOP = 0;
const MINTOP = -2500 + window.innerHeight / 2;
const MAXLEFT = 0;
const MINLEFT = -2500 + window.innerWidth / 2;
const MOVESPEED = 5;

let keyUp = false;
let keyDown = false;
let keyRight = false;
let keyLeft = false;

function rotatePlayer() {
  if ((keyLeft && keyDown) || (keyRight && keyUp)) {
    player.style.transform = "rotate(45deg)";
  } else if ((keyLeft && keyUp) || (keyRight && keyDown)) {
    player.style.transform = "rotate(-45deg)";
  } else if (keyLeft || keyRight) {
    player.style.transform = "rotate(90deg)";
  } else if (keyUp || keyDown) {
    player.style.transform = "rotate(0deg)";
  }
}

function move() {
  let styles = window.getComputedStyle(map);
  let left = Number(styles.left.slice(0, styles.left.length - 2));
  let top = Number(styles.top.slice(0, styles.top.length - 2));
  if (keyUp && top < MAXTOP) {
    top = top + MOVESPEED;
  }
  if (keyDown && top > MINTOP) {
    top = top - MOVESPEED;
  }
  if (keyRight && left > MINLEFT) {
    left = left - MOVESPEED;
  }
  if (keyLeft && left < MAXLEFT) {
    left = left + MOVESPEED;
  }
  map.style.left = left + "px";
  map.style.top = top + "px";
}

function keyDownHandler(event) {
  const keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyRight = true;
      break;
    case 83: //s
      keyDown = true;
      break;
    case 65: //a
      keyLeft = true;
      break;
    case 87: //w
      keyUp = true;
      break;
    case 27:
      clearInterval(interval);
  }
}
function keyUpHandler(event) {
  const keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyRight = false;
      break;
    case 83: //s
      keyDown = false;
      break;
    case 65: //a
      keyLeft = false;
      break;
    case 87: //w
      keyUp = false;
      break;
  }
}

function playerActions() {
  move();
  rotatePlayer();
}

function gameFrame() {
  playerActions();
}
