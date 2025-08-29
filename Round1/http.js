// const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     res.write("This is the node.js ");
//     res.end();
// })
// const PORT=process.env.PORT || 3001;
// server.listen(PORT,()=>console.log(`server running on ${PORT}`))

const path=require("path")
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "node.js", "hello.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    );
  }

  if (req.url === "/contact") {
    fs.readFile(
      path.join(__dirname, "node.js", "contact.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    );
  }
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`server running on ${PORT}`));
