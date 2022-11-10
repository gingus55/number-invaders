console.log("Howdy!");
const gameGrid = document.querySelector("#game-grid");

function startGame() {
  createSquares(100);

  placeRocket();

  // currently hardcoded exits
  setExits();
}

function createSquares(number) {
  console.log(number + " squares are being created");
  for (let i = 0; i < number; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data-number", i);
    gameGrid.appendChild(square);
  }
}

function placeRocket() {
  const startLocation = document.querySelector('[data-number="95"]');
  startLocation.setAttribute("class", "math-rocket");
}

function moveRocket(event) {
  if (event.key == "ArrowUp") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));

    if (location > 10) {
      location -= 10;
      current.classList.remove("math-rocket");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowLeft") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 0)) {
      location--;
      current.classList.remove("math-rocket");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowRight") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 9)) {
      location++;
      current.classList.remove("math-rocket");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowDown") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (location < 90) {
      location += 10;
      current.classList.remove("math-rocket");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
}

function storeRoom() {
  // need to get current ID's on all squares, such that it can be recreated.
  var currentRoom = [];

  for (let index = 0; index < 100; index++) {
    var string = "[data-number='" + index + "']";
    console.log(string);
    const welly = document.querySelector(string);
    var classType = welly.getAttribute("class");

    currentRoom.push(classType);
  }

  console.log(currentRoom);
}

function setExits() {
  // I want to get gaps top, left, middle and bottom to simulate exits

  // 49 on the right
  var rightExit = document.querySelector("[data-number='49']");
  var leftExit = document.querySelector("[data-number='40']");
  var upExit = document.querySelector("[data-number='5']");
  var downExit = document.querySelector("[data-number='95']");

  rightExit.classList.add("right-exit");
  leftExit.classList.add("left-exit");
  upExit.classList.add("up-exit");
  downExit.classList.add("down-exit");
  // 40 on the left
  // 5 top
  // 95 bottom
}

startGame();

addEventListener("keydown", moveRocket);
