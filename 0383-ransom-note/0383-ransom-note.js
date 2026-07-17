/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = new Map();

    for (let char of ransomNote) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of magazine) {
        if (count.has(char)) {
            count.set(char, count.get(char) - 1);

            if (count.get(char) === 0) {
                count.delete(char);
            }
        }
    }

    return count.size === 0;
};