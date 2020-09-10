
function getMovieTitles(substr) {
  let titles = [];
  let pageNum = 1;
  let query =
    "https://jsonmock.hackerrank.com/api/movies/search/?Title=" +
    substr +
    "&page=" +
    pageNum;

  https
    .get(query, function (res) {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", function (chunk) {
        body += chunk;
      });
      res.on("end", function () {
        let titlesjson = JSON.parse(body);
        for (let i = 0; i < titlesjson.data.length; i++) {
          titles.push(titlesjson.data[i].Title);
        }
        if (titlesjson.total_pages > 1) {
          for (let i = 2; i <= titlesjson.total_pages; i++) {
            query =
              "https://jsonmock.hackerrank.com/api/movies/search/?Title=" +
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
          }
        } else {
          let sorted = titles.sort();
          console.log(sorted.join("\n"));
        }
      });
    })
    .on("error", function (e) {
      console.log("There is an error: ", e);
    });
}

process.stdin.on("end", function () {
  __input_stdin_array = __input_stdin.split("\n");
  var _substr = __input_stdin_array[__input_currentline].trim();
  __input_currentline += 1;

  getMovieTitles(_substr);
});
