/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let newIntervals = [intervals[0]];
    for(let i=1;i<intervals.length;i++){
        let lastIntervals = newIntervals[newIntervals.length-1];
        let currentIntervals = intervals[i];
        if(currentIntervals[0] <= lastIntervals[1]){
            lastIntervals[1] = Math.max(
                lastIntervals[1],
                currentIntervals[1]
            );
        }
        else{
            newIntervals.push(currentIntervals);

        }
    }
    return newIntervals;
};