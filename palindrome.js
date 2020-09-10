let isPalindrom = (value) => {
  let valueLower = value.toLowerCase();
  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  let newAlphabet = [];
  for (i = 0; i < value.length; i++) {
    let currentValue = valueLower[i];
    if(validCharacters.includes(currentValue)){
      newAlphabet.push(currentValue);
    }
  }
  newAlphabet.reverse().join("") == valueLower
    ? console.log("Is Palindrome")
    : console.log("Not Palindrome");
};
isPalindrom("boobs");