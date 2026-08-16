/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let duplicateMap = new Map();
    for(let i=0;i<nums.length;i++){
        if(duplicateMap.has(nums[i]) && Math.abs(duplicateMap.get(nums[i])-i)<=k) return true;
        duplicateMap.set(nums[i],i)
    }
    return false;
};