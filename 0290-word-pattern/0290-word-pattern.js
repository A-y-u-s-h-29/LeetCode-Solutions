/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pMap = new Map();
    let sMap = new Map();
    let sWord = s.split(" ");
    let pChar = [...pattern]; 
    if(pattern.length !== sWord.length) return false;
    for(let i=0;i<pChar.length;i++){
        if(pMap.has(pChar[i]) && pMap.get(pChar[i]) !== sWord[i]) return false;
        if(sMap.has(sWord[i]) && sMap.get(sWord[i]) !== pChar[i]) return false;
        pMap.set(pChar[i],sWord[i])
        sMap.set(sWord[i],pChar[i])
    }
    return true
};