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