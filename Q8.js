function countVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;

     for (let i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  let inputStr = "hello";
  let result = countVowels(inputStr);
  console.log(result); 
   
  
  
  