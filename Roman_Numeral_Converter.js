function convertToRoman(num) {
  let roman = "";
  const lookup = {
    'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40,
    'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1
  }

  for(let i in lookup) {//every entry in the object must undergo a test
    while(num >= lookup[i]) {// The current number we are looping through
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;

}

convertToRoman(36);