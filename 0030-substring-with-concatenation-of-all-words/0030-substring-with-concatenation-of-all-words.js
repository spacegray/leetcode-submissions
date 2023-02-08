/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    const wordLength = words[0].length;
    const wordCount = words.length;
    const wordMap = {};
    for (let i = 0; i < wordCount; i++) {
        wordMap[words[i]] = wordMap[words[i]] ? wordMap[words[i]] + 1 : 1;
    }
    for (let i = 0; i < s.length - wordLength * wordCount + 1; i++) {
        const seen = {};
        let j = 0;
        while (j < wordCount) {
        const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
        if (!wordMap[word] || seen[word] === wordMap[word]) {
            break;
        }
        seen[word] = seen[word] ? seen[word] + 1 : 1;
        j++;
        }
        if (j === wordCount) {
        result.push(i);
        }
    }
    return result;
    };