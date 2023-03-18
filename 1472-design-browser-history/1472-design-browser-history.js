/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage]; // initialize history array with homepage
    this.currIndex = 0; // set current index to 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    // add url to history array and reset the forward history
    this.history.splice(this.currIndex+1, this.history.length-this.currIndex-1, url);
    this.currIndex = this.history.length - 1; // update current index
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    // calculate the index to move back to
    const newIndex = Math.max(this.currIndex - steps, 0);
    this.currIndex = newIndex; // update current index
    return this.history[newIndex]; // return current url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    // calculate the index to move forward to
    const newIndex = Math.min(this.currIndex + steps, this.history.length - 1);
    this.currIndex = newIndex; // update current index
    return this.history[newIndex]; // return current url
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
