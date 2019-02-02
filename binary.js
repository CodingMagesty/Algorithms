// Complexity log2n

const binarySearch = (searchArray, targetValue) => {
  let max = searchArray.length - 1;
  let min = 0;
  let guess;

  while (max >= min) {
    guess = Math.floor((max + min) / 2);

    if (searchArray[guess] === targetValue) {
      return guess;
    } else if (searchArray[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}
