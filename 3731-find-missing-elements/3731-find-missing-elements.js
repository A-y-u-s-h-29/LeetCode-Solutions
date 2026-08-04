/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let smallest = nums[0];
    let largest = nums[0];
    let numSet = new Set(nums);
    let result =[];
    for(let num of nums){
        if(num < smallest) smallest = num;
        if(num > largest) largest = num;
    }
    for(let i=smallest;i<=largest;i++){
        if(!numSet.has(i)) result.push(i);
    }
    return result
};