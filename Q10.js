function calculateFactorial(num) {
    if (num < 0) {
      return "Invalid input. Factorial is not defined for negative numbers.";
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  let inputNum = 5;
  let result = calculateFactorial(inputNum);
  console.log(result); 
  
  
  // Test the function with the given input
  