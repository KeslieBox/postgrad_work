function sameFrequency(num1, num2){
    // convert num to array, then sort and convert to string
    const strNum1 = Array.from(String(num1), Number).sort((a,b) => a - b).toString()
    const strNum2 = Array.from(String(num2), Number).sort((a,b) => a - b).toString()
    
  
    if (strNum1 === strNum2){
        return true
    } else {
        return false
    } 
  }

  sameFrequency(182, 281)

  function areThereDuplicates(...args){
    // use Set to create a new array without any duplicates
    return new Set(args).size !== args.length
  }

  function areThereDuplicates(...args) {
        let frequencyCounter = {}
        
        for (let val in args) {
            frequencyCounter[args[val]] = (frequencyCounter[args[val]] || 0) + 1
        }
        
        for (let key in frequencyCounter){
            if (frequencyCounter[key] > 1) return true 
        }
        return false
    }

function isSubsequence(str1, str2) {
    let right = str1.length - 1
    let strCheck = ""
   
    if (str1 === str2) return true
    for (let i in str1){
        if (!str2.includes(str1[i])) {
            strArr += str[i]
        } else if (str2.includes(strCheck)) {
            return true
        }
    }

}

function isSubsequence(str1, str2){
    let i = 0
    let j = 0
    
    if(!str1) return true
    
    while (j < str2.length){
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
    }
    return false
}