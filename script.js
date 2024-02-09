/** @format */

const moveContainer = document.getElementById("move-container");
const moveBox = document.getElementById("move-box");

const position = {
  x: moveContainer.offsetWidth / 2 - moveBox.offsetWidth / 2,
  y: moveContainer.offsetHeight / 2 - moveBox.offsetHeight / 2,
};
const step = 10;

const pressedKeys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

// Shorten with for in??? Make const for key -> key is press -> :)  ???

window.addEventListener("keydown", (elem) => {
  if (elem.key === "w") pressedKeys.w = true;
  if (elem.key === "a") pressedKeys.a = true;
  if (elem.key === "s") pressedKeys.s = true;
  if (elem.key === "d") pressedKeys.d = true;
});
// elem.key === something that equates "key" to pressedKeys.(key) ??? only one line needed mabye?
window.addEventListener("keyup", (elem) => {
  if (elem.key === "w") pressedKeys.w = false;
  if (elem.key === "a") pressedKeys.a = false;
  if (elem.key === "s") pressedKeys.s = false;
  if (elem.key === "d") pressedKeys.d = false;
});

function placeBox() {
  moveBox.style.top = `${position.y}px`;
  moveBox.style.left = `${position.x}px`;
}
// same thing here??? short??? two codes though maybe up or down and left right??? WHY IS HE ESCAPING
function gameLoop() {
  if (pressedKeys.w && position.y > 0) {
    position.y -= step;
  }

  if (pressedKeys.a && position.x > 0) {
    position.x -= step;
  }
  if (
    pressedKeys.s &&
    position.y <= moveContainer.offsetHeight - moveBox.offsetHeight
  ) {
    position.y += step;
  }
  if (
    pressedKeys.d &&
    position.x < moveContainer.offsetWidth - moveBox.offsetWidth
  ) {
    position.x += step;
  }
  placeBox();
  setTimeout(gameLoop);
}
gameLoop();

moveContainer.addEventListener("click", (elem) => {
  position.x = elem.clientX - moveBox.offsetHeight / 2;
  position.y = elem.clientY - moveBox.offsetWidth / 2;
  placeBox();
});

// Add border so he can't escape IT DIDNT WORK HES ESCAPING
// make him cute?
