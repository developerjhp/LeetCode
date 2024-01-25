/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const res = []
    const most = Math.max(word1.length, word2.length)

    for (let i = 0; i <= most; i++) {
        word1[i] && res.push(word1[i])
        word2[i] && res.push(word2[i])
    }

    return res.join('')
};