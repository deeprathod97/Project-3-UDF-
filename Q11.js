function checkNumberType(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  let inputNum = -2;
  let result = checkNumberType(inputNum);
  console.log(result); 
  
