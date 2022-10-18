console.log("Howdy!");
const gameGrid = document.querySelector("#game-grid");

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
      current.setAttribute("class", "square");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.setAttribute("class", "math-rocket");
    }
  }
  if (event.key == "ArrowLeft") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 0)) {
      location--;
      current.setAttribute("class", "square");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.setAttribute("class", "math-rocket");
    }
  }
  if (event.key == "ArrowRight") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (!(location % 10 === 9)) {
      location++;
      current.setAttribute("class", "square");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.setAttribute("class", "math-rocket");
    }
  }
  if (event.key == "ArrowDown") {
    const current = document.querySelector(".math-rocket");
    var location = parseInt(current.getAttribute("data-number"));
    if (location < 90) {
      location += 10;
      current.setAttribute("class", "square");
      var string = "[data-number='" + location + "']";
      const moved = document.querySelector(string);
      moved.setAttribute("class", "math-rocket");
    }
  }
}

function storeRoom() {
  // need to get current ID's on all squares, such that it can be recreated.
  var currentRoom = [];

  for (let index = 0; index < 100; index++) {
    var string = "[data-number='" + index + "']";
    const welly = document.querySelector(string);
    var classType = welly.getAttribute("class");

    currentRoom.push(classType);
  }

  console.log(currentRoom);
}

createSquares(100);

placeRocket();

addEventListener("keydown", moveRocket);
