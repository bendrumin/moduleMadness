randomNumber(100, 1000000);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
module.exports = randomNumber;
