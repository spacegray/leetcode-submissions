/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  let i = 0;
  const len = flowerbed.length;

  while (i < len) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === len - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      count++;
      i += 2; // Skip the next adjacent plot
    } else {
      i++;
    }
  }

  return count >= n;
};
