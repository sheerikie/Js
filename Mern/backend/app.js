const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Incoming Request");
  console.log(req.method, req.url);
  if (req.method === "POST") {
    let body = "";
    req.on("end", () => {
      let ans = body.split("=")[1];
      res.end(`My anse` + ans);
    });
    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<form method='POST'><input type='text' name='ans'/><input type='submit'/></form>`
    );
  }
});
server.listen(5000);
