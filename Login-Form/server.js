const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("frontend"));

const emailDB = "admin@gmail.com";
const passwordDB = "123";

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (email === emailDB && password === passwordDB) {
    res.send("Login successful!");
  } else {
    res.send("Invalid email or password");
  }
});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
