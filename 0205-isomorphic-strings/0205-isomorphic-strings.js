/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();
    for(let i=0;i<s.length;i++){
        let sChar = s[i];
        let tChar = t[i];
        if(sMap.has(sChar) && sMap.get(sChar) !== tChar) return false;
        if(tMap.has(tChar) && tMap.get(tChar) !== sChar) return false;
        sMap.set(sChar,tChar);
        tMap.set(tChar,sChar);
    }
    return true;
};