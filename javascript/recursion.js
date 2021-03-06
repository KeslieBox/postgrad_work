// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

var reverseString = function(s) {
    if (s.length <= 1) return s
   
    function swap(left, right){
        if(right >= left){
            [s[left], s[right]] = [s[right], s[left]]
            return swap(left + 1, right - 1)
        }     
    }
    
    return swap(0, s.length - 1)
};

var numberOfSteps = function(num) {
    if (num === 0) return 0
    if (num % 2 === 0){
        return 1 + numberOfSteps(num/2)
    } else {
        return 1 + numberOfSteps(num-1)
    }     
};

// same problem as above
var numberOfSteps = function(num) {
    let count = 0
    return stepsToZero(num, count)       
};

function stepsToZero(num, count){
    if (num === 0) return count
    if (num % 2 === 0){
        num = num / 2
        count++
        return stepsToZero(num, count)
    } else {
        num = num - 1
        count++
        return stepsToZero(num, count)
    }   
}

var isPowerOfThree = function(n) {
    if(n === 1) return true  
    if(n%3 > 0 || n === 0) return false 
    return isPowerOfThree(n/3)
}