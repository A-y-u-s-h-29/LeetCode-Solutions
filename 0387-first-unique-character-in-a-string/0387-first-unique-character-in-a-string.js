/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let firstMap = new Map();
    for(let i=0;i<s.length;i++){
        firstMap.set(s.charAt(i),(firstMap.get(s.charAt(i)) ||0)+1);
    }
    for(let i=0;i<s.length;i++){
        if(firstMap.get(s.charAt(i))===1) return i
    }
   
    return -1;
};