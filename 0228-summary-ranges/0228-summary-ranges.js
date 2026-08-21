/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arrayOfRange = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {

        // Check if current number is the end of a range
        if (
            i === nums.length - 1 ||
            nums[i] + 1 !== nums[i + 1]
        ) {

            // Single number
            if (nums[start] === nums[i]) {
                arrayOfRange.push(`${nums[i]}`);
            } 
            // Range
            else {
                arrayOfRange.push(`${nums[start]}->${nums[i]}`);
            }

            // Next range starts from next index
            start = i + 1;
        }
    }

    return arrayOfRange;
};