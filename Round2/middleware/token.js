function Token(req, res, next) {
  console.log("Token created..");
  setInterval(() => {
    const Token = "123";
    req.token = true;
    next();
  }, 2000);
}

module.exports = Token;
