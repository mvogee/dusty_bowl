const map = document.querySelector("#map");
const player = document.querySelector("#player");
const MAXTOP = 0;
const MINTOP = -2500 + window.innerHeight / 2;
const MAXLEFT = 0;
const MINLEFT = -2500 + window.innerWidth / 2;

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
    console.log("rotate(90)");
    player.style.transform = "rotate(90deg)";
  } else if (keyUp || keyDown) {
    console.log("rotate(0)");
    player.style.transform = "rotate(0deg)";
  }
}

function move() {
  let styles = window.getComputedStyle(map);
  let left = Number(styles.left.slice(0, styles.left.length - 2));
  let top = Number(styles.top.slice(0, styles.top.length - 2));
  if (keyUp && top < MAXTOP) {
    top = top + 5;
  }
  if (keyDown && top > MINTOP) {
    top = top - 5;
  }
  if (keyRight && left > MINLEFT) {
    left = left - 5;
  }
  if (keyLeft && left < MAXLEFT) {
    left = left + 5;
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
  }
  move();
  rotatePlayer();
}
function keyUpHandler(event) {
  const keyCode = event.keyCode;
  console.log("keyCode up", keyCode);
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

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
