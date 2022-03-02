
function rot13(str) {
  str = str.toUpperCase().split('');
  let newStr = [];
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  const shifts = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

  str.map(char => {
    if(/[A-Z]/.test(char)) {
      let index = Math.abs((shifts.indexOf(char)));
      newStr.push(alphabets[index]);
    }else {
      newStr.push(char);
    }
  })
  return newStr.join('');
}

rot13("SERR PBQR PNZC");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));