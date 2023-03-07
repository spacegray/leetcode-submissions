/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const tCount = {};
  for (const c of t) {
    tCount[c] = (tCount[c] || 0) + 1;
  }

  let window = {};
  let start = 0;
  let count = Object.keys(tCount).length;
  let minLength = Infinity;
  let minWindow = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (tCount[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === tCount[c]) {
        count--;
      }
    }

    while (count === 0) {
      const length = i - start + 1;
      if (length < minLength) {
        minLength = length;
        minWindow = s.substring(start, i + 1);
      }

      const startC = s[start];
      if (tCount[startC]) {
        window[startC]--;
        if (window[startC] < tCount[startC]) {
          count++;
        }
      }

      start++;
    }
  }

  return minWindow;
}