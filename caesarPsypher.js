caesarPsypher = (value, numbe) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let valueLower = value.toLowerCase().split("");
  let number = numbe % 26;
  let newValue = [];
  let newString = [];
  console.log(number);
  for (i = 0; i < value.length; i++) {
    let currentValue = valueLower[i];
    if (alphabet.includes(currentValue)) {
      newValue.push(currentValue);
    }
    let currentIndex = alphabet.indexOf(currentValue);
    let newIndex = currentIndex + number;
    if (newIndex > 26) {
      newIndex = 26 - newIndex;
      newStrin = alphabet[newIndex];
      newString.push(newStrin);
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
      newStrin = alphabet[newIndex];
      newString.push(newStrin);
    } else {
      newIndex = newIndex;
      newStrin = alphabet[newIndex];
      newString.push(newStrin);
    }
  }
  console.log(newString.join(""));
};
caesarPsypher("we are the champios", 1);
