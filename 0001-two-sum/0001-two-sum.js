/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = new Map();

    for(let i=0;i<nums.length;i++){

        let secondNum = target-nums[i];

        if(sumMap.has(secondNum)) return [sumMap.get(secondNum),i];
        sumMap.set(nums[i],i)    
    }
    return []
};