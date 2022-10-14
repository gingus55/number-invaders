console.log("Howdy!");
const gameGrid = document.querySelector("#game-grid");

function createSquares(number) {
  console.log(number + " squares are being created");
  for (let i = 0; i < number; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("data", i);
    gameGrid.appendChild(square);
  }
}

function placeRocket() {
  const startLocation = document.querySelector('[data="95"]');
  startLocation.setAttribute("class", "math-rocket");
}

createSquares(100);

placeRocket();
