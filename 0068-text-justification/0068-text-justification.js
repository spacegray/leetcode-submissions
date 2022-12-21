/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// the time complexity is O(n) because we are iterating through the words array
// the space complexity is O(n) because we are creating a new array of strings

var fullJustify = function(words, maxWidth) {
    let result = [];
    let line = [];
    let lineLength = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // if the line is full, add it to the result
        if (lineLength + word.length + line.length > maxWidth) {
            // if the line is only one word, add spaces to the end
            // if the line is more than one word, add spaces between words
            let spaces = maxWidth - lineLength;
            // if there are more than one word, calculate the spaces between words
            let spacesBetween = line.length > 1 ? Math.floor(spaces / (line.length - 1)) : 0;
            // if there are spaces left over, add them to the first few words
            let spacesRemainder = line.length > 1 ? spaces % (line.length - 1) : 0;
            // create the line string
            let lineStr = '';
            for (let j = 0; j < line.length; j++) {
                // concatenate the word to the line string
                lineStr += line[j];
                // add the spaces   
                if (j < line.length - 1) {
                    // add the spaces between words
                    lineStr += ' '.repeat(spacesBetween);
                    if (spacesRemainder > 0) {
                        // add the spaces left over
                        lineStr += ' ';
                        // decrement the number of spaces left over
                        spacesRemainder--;
                    }
                }
            }
            // add the spaces to the end of the line
            lineStr += ' '.repeat(maxWidth - lineStr.length);
            // add the line to the result
            result.push(lineStr);
            // reset the line and line length
            line = [];
            // reset the line length
            lineLength = 0;
        }
        // add the word to the line
        line.push(word);
        // increment the line length
        lineLength += word.length;
    }
    // add the last line to the result
    let lineStr = line.join(' ');
    // add the spaces to the end of the line
    lineStr += ' '.repeat(maxWidth - lineStr.length);
    // add the line to the result
    result.push(lineStr);
    return result;
    
}