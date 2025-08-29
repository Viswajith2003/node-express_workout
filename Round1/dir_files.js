// global.console.log("Hllo"); 
// console.log(__filename);
// console.log(__dirname);

//create directory
// const path = require("path");
// const fs=require("fs");
// fs.mkdir(path.join(__dirname,"/api2/index.js"),{},()=>{
//     if(err){
//         throw err;
//     }
// })

//Remove directory
// const path = require("path");
// const fs=require("fs");
// fs.rmdir(path.join(__dirname,"/api2"),{recursive:true},()=>{
//     if(err){
//         throw err;
//     }
// })


// write into file ,it become overwrite
// const path = require("path");
// const fs=require("fs");
// let name="Viswajith"
// fs.writeFile(path.join(__dirname,"node.js","api.txt"),`user_name: ${name}`,(err)=>{
//     if(err) throw err;
// }) 

//append to file without overwrite
// const path = require("path");
// const fs=require("fs");
// let name="Ram"
// fs.appendFile(path.join(__dirname,"node.js","api.txt"),`\nuser_name: ${name}`,(err)=>{
//     if(err) throw err;
// }) 



//Read file contents
const path = require("path");
const fs=require("fs");
fs.readFile(path.join(__dirname,"node.js","api.txt"),"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
}) 