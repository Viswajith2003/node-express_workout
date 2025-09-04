//stream

// const fs = require("fs");

// const readstream = fs.createReadStream("datas/hello.html", "utf8");
// readstream.on("data", (chunk) => {
//   console.log("New chunk received:", chunk);
// });


//buffers

// const fs=require("fs")

// const data=fs.readFileSync("datas/contact.html")
// console.log(data)    //buffer format
// console.log(data.toString()); //string format


//piping

const fs = require("fs");

const readStream = fs.createReadStream("hello.html");
const writeStream = fs.createWriteStream("api.txt");

readStream.pipe(writeStream);

