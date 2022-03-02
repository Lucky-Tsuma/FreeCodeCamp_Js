function palindrome(str) {
  str = str.toLowerCase().split("").filter(char => !(/\W|_|\s/.test(char)));;
  let unreversed = str.join("");
  let reversed = str.reverse().join("");
  return reversed === unreversed ? true : false;
}


console.log(palindrome("eye"));