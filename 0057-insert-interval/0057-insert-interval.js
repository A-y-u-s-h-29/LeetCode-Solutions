/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);

    //sort the intervals
    intervals.sort((a,b)=>a[0]-b[0])

    let newArray = [intervals[0]];
    for(let i=1;i<intervals.length;i++){
        let currentInterval = intervals[i];
        let lastInterval = newArray[newArray.length-1];

        if(lastInterval[1]>=currentInterval[0]){
            lastInterval[1]=Math.max(lastInterval[1],currentInterval[1])
        }
        else{
            newArray.push(currentInterval);
        }
    }
    return newArray;
};