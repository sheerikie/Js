function reverse(string) {
  let stringList = [];
  let newString = string.split(" ");

  newString.forEach((word) => {
    let char = "";
    for (i = word.length - 1; i >= 0; i--) {
      char += word[i];
    }
    stringList.push(char);
  });
  console.log(stringList.join(" "));
}

reverse("hello guys");
