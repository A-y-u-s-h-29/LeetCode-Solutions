/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let duplicateMap = new Map();
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        if(duplicateMap.has(num)){
            if((i-duplicateMap.get(num))<=k) return true;
        }    
        duplicateMap.set(num,i)
    }
    return false;
};