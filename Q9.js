function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  let inputNum = 7;
  let result = isPrime(inputNum);
  console.log(result); 
    
  
    
  