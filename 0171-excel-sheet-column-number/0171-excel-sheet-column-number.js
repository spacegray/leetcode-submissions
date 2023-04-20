/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - 64; // get ASCII code and convert to 1-based index
    result = result * 26 + charCode; // update result based on current char code
  }
  return result;
};
