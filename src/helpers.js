export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const generateRandomBoard = (size) => {
  let temp = [];
  for (let i = 0; i < (size * size) / 2; i++) {
    temp.push(i);
    temp.push(i);
  }
  shuffleArray(temp);
  return temp.map((val, id) => ({ id, val, status: null }));
};

export const setUpPlayers = (numPlayers) => {
  let players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({ id: i, moves: 0, points: 0, status: null });
  }
  console.log(players);
  return players;
};
