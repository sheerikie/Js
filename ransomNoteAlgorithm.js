function magazineText(noteText, magazineText) {
  let noteArray = noteText.split(" ");
  let magazineArray = magazineText.split(" ");
  let magazineObj = {};

  magazineArray.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  let notePresent = true;
  noteArray.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) notePresent = false;
    } else {
      notePresent = false;
    }
  });
  console.log(notePresent);
  console.log(magazineObj);
}

magazineText("the champions we are", "we are the champions");
