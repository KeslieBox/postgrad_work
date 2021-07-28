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

    function sameFrequency(num1, num2){
        let strNum1 = num1.toString();
        let strNum2 = num2.toString();
        if(strNum1.length !== strNum2.length) return false;
        
        let countNum1 = {};
        let countNum2 = {};
        
        for(let i = 0; i < strNum1.length; i++){
          countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
        }
        
        for(let j = 0; j < strNum1.length; j++){
          countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
        }
        
        for(let key in countNum1){
          if(countNum1[key] !== countNum2[key]) return false;
        }
       
        return true;
    }