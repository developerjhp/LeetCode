/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseWords(s) {
    s.reverse()

    const length = s.length

    let start = 0;

    for (let i = 0; i <= length; i++) {
        if (s[i] === ' ' || i === length) {
            reverse(s, start, i - 1)
            start = i + 1;
        }
    }
};

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
}