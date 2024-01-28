/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numMap = new Map();
    const len = nums.length
    
    for (let i = 0; i < len; i++) {
        const comp = target - nums[i]

        if (numMap.has(comp)) {
            return [numMap.get(comp), i];
        }

        numMap.set(nums[i], i)
    }

    return []
};