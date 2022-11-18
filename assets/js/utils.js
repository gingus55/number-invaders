const putInLocalStorage = () => {};

const getFromLocalStorage = () => {
  const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
  return rooms;
};

module.exports = {
  getFromLocalStorage,
};
