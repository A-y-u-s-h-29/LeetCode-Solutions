/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = new Map();
    let array = [];
    for(let i=0;i<nums.length;i++){
        let secondNum = target-nums[i];
        if(sumMap.has(secondNum)) {
            array.push(i);
            array.push(sumMap.get(secondNum));
        }
        sumMap.set(nums[i],i)    
    }
    return array;
};