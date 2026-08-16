/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let happyMap = new Map();
    while(n!=1){
        if(happyMap.has(n)) return false;
        happyMap.set(n,true);
        n=squareAndSum(n);
    }
    return true;
};
function squareAndSum(num){
    let sum=0;
    while(num>0){
        let digit = num%10;
        sum+= digit*digit;
        num = Math.floor(num/10);
    }
    return sum;
}