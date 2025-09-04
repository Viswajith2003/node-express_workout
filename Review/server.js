const express = require("express");
const app = new express();

app.use(express.json()); //handles raw JSON.
app.use(express.urlencoded({ extended: true })); //handles form data.

const userData = [
  {
    id: 1,
    name: "viswa",
    company: "Google",
  },
  {
    id: 2,
    name: "Ajay",
    company: "Microsoft",
  },
  // {
  //   id: 2,
  //   name: "Arun",
  //   company: "flipcart",
  // },
  {
    id: 3,
    name: "Akshay",
    company: "AWS",
  },
];

app.get("/user", (req, res) => {
  res.json(userData);
});
// Filter by ID (param):
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const filterData = userData.filter((data) => data.id === userId);
  res.json(filterData);
});

// Filter by ID (query):
app.post("/user", (req, res) => {
  const query = parseInt(req.query.id);
  const filterData = userData.filter((data) => data.id === query);
  res.json(filterData);
});
// Filter by ID + name: (query)
app.post("/user", (req, res) => {
  const userId = parseInt(req.query.id);
  const userName = req.query.name;
  const filterData = userData.filter((data) => {
    if (userId && userName) {
      return data.id === userId && data.name == userName;
    } else {
      return data;
    }
  });
  res.json(filterData);
});

const middle = [TokenGen, Validation];

app.get("/login", middle, (req, res) => {
  res.send("<h1>User loggined successfully</h1>");
});

//Example of middleware
function TokenGen(req, res, next) {
  console.log("Token created..");
  setTimeout(() => {
    const Token = "123";
    req.token = true;
    next();
  }, 2000);
}

function Validation(req, res, next) {
  if (req.token) {
    console.log("token approved..");
    next();
    return;
  } else {
    console.log("No token");
    res.status(401).send("<h1>No Authentication</h1>");
  }
}

app.get("*", (req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`server running in ${PORT}`);
});
