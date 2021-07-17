/**
 * Welcome to the bonus round.
 * We need our options to be shuffled before
 * we send it to our users. Create a function that
 * will take in an array and shuffle the order of that
 * array.
 */

/**
 * Shuffles an array
 * @param {Array} array original array
 * @returns {Array} shuffled array
 */

function shuffleArray(array) {
  const arr = array.slice(0);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // const temp = array[i];
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

module.exports = shuffleArray;
