function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "Leap year";
    } else {
      return "Not a leap year";
    }
  }
  let inputYear = 2020;
  let result = isLeapYear(inputYear);
  console.log(result); 
  