/**Palindrome */
let checkPalindrome=(text)=>{if(text==text.split().reverse()) console.log('is Palindrome')}
checkPalindrome("eye");



/**Prime */
for (var x = 2; x < n; x++) {
    if (n == 1 || n == 2) {
      return "Prime";
    }
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return "Not prime";
      }
    }
    return "Prime";
  }

/**fetch */
query =
"https://****/api/movies/search/?Title=" +
substr +
"&page=" +
i;
https
.get(query, function (res) {
  let body = "";
  res.on("data", function (chunk) {
    body += chunk;
  });
  res.on("end", function () {
    let titlesjson = JSON.parse(body);
    for (let i = 0; i < titlesjson.data.length; i++) {
      titles.push(titlesjson.data[i].Title);
    }
    if (i === titlesjson.total_pages) {
      sorted = titles.sort();
      console.log(sorted.join("\n"));
    }
  });
})
.on("err", function (e) {
  console.log(
    "Check for error in: " + i + ", with the messsage: " + e
  );
});