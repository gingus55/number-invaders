console.log("Howdy!");
const gameGrid = document.querySelector("#game-grid");

function startGame() {
  createRoom(100, 95);
}

function createRoom(square, rocket) {
  createSquares(square);

  placeRocket(rocket);

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

function placeRocket(n) {
  var string = `[data-number="${n}"]`;
  const startLocation = document.querySelector(string);
  startLocation.setAttribute("class", "math-rocket");
}

function moveRocket(event) {
  if (event.key == "ArrowUp") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    console.log(location);
    if (location === 5) {
      storeRoom();
      createRoom(100, 95);
    }
    if (location >= 10) {
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

const rooms = JSON.parse(localStorage.getItem("rooms")) || [];

function storeRoom() {
  // need to get current ID's on all squares, such that it can be recreated.
  var currentRoom = [];

  for (let index = 0; index < 100; index++) {
    var string = "[data-number='" + index + "']";
    // console.log(string);
    const welly = document.querySelector(string);
    var classType = welly.getAttribute("class");

    currentRoom.push(classType);
  }

  rooms.push(currentRoom);

  localStorage.setItem("rooms", JSON.stringify(rooms));

  // console.log(currentRoom);
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

function attack(e) {
  if (e.keyCode == 32) {
    const current = document.querySelector(".math-rocket");
    current.classList.add("bomb");
    // console.log("spacebar");
  }
}

function keyPress(key) {
  moveRocket(key);
  attack(key);
}

startGame();

addEventListener("keydown", keyPress);
