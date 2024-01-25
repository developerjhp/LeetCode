/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0)
    return sumUpToN(nums.length) - sum
};

function sumUpToN(n) {
    return (n * (n + 1)) / 2
}