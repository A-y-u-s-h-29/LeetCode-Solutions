/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let anaMap = new Map();
    if(s.length !== t.length) return false;

    for(let char of s){
        anaMap.set(char, (anaMap.get(char) || 0) + 1)
    }
    for(let char of t){
        if(!anaMap.has(char)) return false;
        anaMap.set(char,anaMap.get(char)-1)
        if(anaMap.get(char)<0) return false;
    }
    return true;
};