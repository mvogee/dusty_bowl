const map = document.querySelector("#map");

let keyUp = false;
let keyDown = false;
let keyRight = false;
let keyLeft = false;

function keyDownHandler(event) {
  console.log("map", map);
  const keyCode = event.keyCode;
  let styles = window.getComputedStyle(map);
  let left = Number(styles.left.slice(0, styles.left.length - 2));
  let top = Number(styles.top.slice(0, styles.top.length - 2));
  console.log(left, top);
  console.log("keyCode down", keyCode);
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
  if (keyUp) {
    top = top + 5;
  }
  if (keyDown) {
    top = top - 5;
  }
  if (keyRight) {
    left = left - 5;
  }
  if (keyLeft) {
    left = left + 5;
  }
  map.style.left = left + "px";
  map.style.top = top + "px";
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
