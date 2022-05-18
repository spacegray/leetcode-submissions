/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  // Handle edge cases
  if (dividend === -Math.pow(2, 31) && divisor === -1)
    return Math.pow(2, 31) - 1;
    if (dividend === divisor) return 1;
    if (divisor === 1) return dividend;

  let absDiv = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let result = 0;

  while (absDiv >= absDivisor) {
    const bitShift = getBitShift(absDiv, absDivisor);
    result += 1 << bitShift;
    absDiv -= absDivisor << bitShift;
  }

  if ((dividend ^ divisor) >> 31) return -result;
  return result;
};

function getBitShift(dividend, divisor) {
  let result = 0;

  while (dividend >= divisor) {
    result += 1;
    // Case to handle JavaScript's 32-bit integer overflow
    if (divisor >= Math.pow(2, 30)) {
      break;
    }
    divisor = divisor << 1;
  }
  return result - 1;
}