const fs =require("fs");
const path=require("path")

// fs.readFile(path.join(__dirname,"node.js","api.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile(path.join(__dirname,"datas","api.txt"), "\n Hello world", (err,data) => {
//   if (err) throw err;
//   console.log("Logined successfull");
//   console.log(data)
// });\

fs.writeFile(path.join(__dirname,"datas","api.txt"), "\n Hello world 1", (err,data) => {
  if (err) throw err;
  console.log("create files successfull");
  console.log(data)
});

// fs.rename(path.join(__dirname,"node.js"),"datas",()=>{
//     if(err) throw err;
//     console.log("File Renamed successfully")
// })

// fs.unlink(path.join(__dirname,"datas","api.txt"),()=>{
//     if(err) throw err;
//     console.log("File deleted successfully")
// })

