const { getFromLocalStorage } = import("./utils");

console.log("Howdy!");
const gameGrid = document.querySelector("#game-grid");

let position = [0, 0];

const startGame = () => {
  createRoom(100, 95);
};

const createRoom = (squareNumber, rocketLocation) => {
  gameGrid.innerHTML = "";
  createSquares(squareNumber);

  placeRocket(rocketLocation);

  // currently hardcoded exits
  setExits();
};

const createSquares = (number) => {
  console.log(number + " squares are being created");
  for (let i = 0; i < number; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data-number", i);
    gameGrid.appendChild(square);
  }
};

const placeRocket = (n) => {
  let string = `[data-number="${n}"]`;
  const startLocation = document.querySelector(string);
  startLocation.setAttribute("class", "math-rocket");
};

const moveRocket = (event) => {
  if (event.key == "ArrowUp") {
    const current = document.querySelector(".math-rocket");
    let location = parseInt(current.getAttribute("data-number"));
    console.log(location);
    if (location === 5) {
      storeRoom();
      createRoom(100, 95);
      position[1]++;
    }
    if (location >= 10) {
      location -= 10;
      current.classList.remove("math-rocket");
      let string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowLeft") {
    const current = document.querySelector(".math-rocket");
    let location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 0)) {
      location--;
      current.classList.remove("math-rocket");
      let string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowRight") {
    const current = document.querySelector(".math-rocket");
    let location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 9)) {
      location++;
      current.classList.remove("math-rocket");
      let string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
  if (event.key == "ArrowDown") {
    const current = document.querySelector(".math-rocket");
    let location = parseInt(current.getAttribute("data-number"));
    if (location < 90) {
      location += 10;
      current.classList.remove("math-rocket");
      let string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.classList.add("math-rocket");
    }
  }
};

// const rooms = JSON.parse(localStorage.getItem("rooms")) || [];

const storeRoom = () => {
  // need to get current ID's on all squares, such that it can be recreated.
  const currentRoom = [];

  for (let index = 0; index < 100; index++) {
    const string = "[data-number='" + index + "']";
    // console.log(string);
    const welly = document.querySelector(string);
    const classType = welly.getAttribute("class");

    currentRoom.push(classType);
  }

  const room = {
    position: position,
    room: currentRoom,
  };
  let rooms = getFromLocalStorage();
  rooms.push(room);

  localStorage.setItem("rooms", JSON.stringify(rooms));

  // console.log(currentRoom);
};

const setExits = () => {
  // I want to get gaps top, left, middle and bottom to simulate exits

  // 49 on the right
  const rightExit = document.querySelector("[data-number='49']");
  const leftExit = document.querySelector("[data-number='40']");
  const upExit = document.querySelector("[data-number='5']");
  const downExit = document.querySelector("[data-number='95']");

  rightExit.classList.add("right-exit");
  leftExit.classList.add("left-exit");
  upExit.classList.add("up-exit");
  downExit.classList.add("down-exit");
  // 40 on the left
  // 5 top
  // 95 bottom
};

const attack = (e) => {
  if (e.keyCode == 32) {
    const current = document.querySelector(".math-rocket");
    current.classList.add("bomb");
    // console.log("spacebar");
  }
};

const keyPress = (key) => {
  moveRocket(key);
  attack(key);
};

startGame();

addEventListener("keydown", keyPress);
