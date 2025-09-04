function Validation(req, res, next) {
  console.log("start");
  if (req.token) {
    console.log("token Approved");
    next();
    return; //The return statement is used to exit a function and return a value. If no value is specified, the function will return undefined by default.
    //In this case, the return statement is used to exit the middleware function and to prevent other code from being executed after the next() call.
  } else {
    console.log("NO token");
    res.send("<h1>No Auth</h1>");
  }
  console.log("end");
}
module.exports = Validation;
