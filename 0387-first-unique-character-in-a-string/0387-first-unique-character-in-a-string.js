/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let firstMap = new Map();
    for(let char of s){
        firstMap.set(char,(firstMap.get(char) ||0)+1);
    }
    for(let i=0;i<s.length;i++){
        if(firstMap.get(s.charAt(i))===1){
            return i
        }
    }
    return -1;
};