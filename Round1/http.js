// const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     res.write("This is the node.js ");
//     res.end();
// })
// const PORT=process.env.PORT || 3001;
// server.listen(PORT,()=>console.log(`server running on ${PORT}`))


// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     fs.readFile(
//       path.join(__dirname, "datas", "api.txt"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { "content-type": "text/html" });
//         res.end(`<h1>${data}</h1>`);
//       }
//     );
//   } else if (req.url === "/contact") {
//     fs.readFile(
//       path.join(__dirname, "datas", "contact.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { "content-Type": "text/html" });
//         res.end(data);
//       }
//     );
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1>404 Not Found</h1>");
//   }
// });

// const PORT = process.env.PORT || 3007;
// server.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });
