const express = require("express");
const app = express();
// const path = require("path");
const Token =require("./middleware/token")
const Validation =require("./middleware/validation")


const middleware=[Token,Validation];


app.get("/profile",middleware, (req, res) => {
  res.send("<h1>Successfully Done</h1>");
  console.log("User logged");
});



const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
