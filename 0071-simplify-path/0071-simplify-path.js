/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const parts = path.split('/');
  const stack = [];
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === '' || part === '.') {
      continue;
    }
    if (part === '..') {
      stack.pop();
    } else {
      stack.push(part);
    }
  }
  
  return '/' + stack.join('/');
};