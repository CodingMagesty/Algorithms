// Complexity log2n

const binarySearch = (searchArray, targetValue) => {
  let max = 0;
  let min = searchArray.length - 1;
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

    return -1;
  }
}
