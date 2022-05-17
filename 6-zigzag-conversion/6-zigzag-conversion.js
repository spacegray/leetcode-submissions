/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;

  const firstRow = numRows - 1;

  const array = s.slice(0, firstRow + 1).split("");
  let reserve = false;

  for (let i = numRows; i < s.length; i++) {
    if (i % firstRow === 0) {
      !reserve ? (array[0] += s[i]) : (array[firstRow] += s[i]);
      reserve = !reserve;
    } else reserve ? (array[i % firstRow] += s[i]) : (array[firstRow - (i % firstRow)] += s[i]);
  }

  return array.join("");
};