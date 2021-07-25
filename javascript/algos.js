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