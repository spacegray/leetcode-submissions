/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 
// Time complexity: O(nlog(n))
// Space complexity: O(1)
 

var canAttendMeetings = function (intervals) {
    // sort the intervals by start time
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  // iterate through the sorted intervals
  // compare the end time of the current interval with the start time of the next interval

  for (let i = 0; i < sortedIntervals.length - 1; i++) {
    if (sortedIntervals[i][1] > sortedIntervals[i + 1][0]) {
        // if the end time of the current interval is greater than the start time of the next interval, return false
      return false;
    }
  }
  return true;
};