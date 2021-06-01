const game_2048 = Object.create(null);
const identity = (x) => x;
game_2048.left = identity; // this is the placeholder for the correct implementation
game_2048.right = identity;
game_2048.up = identity;
game_2048.down = identity;

export default Object.freeze(game_2048);