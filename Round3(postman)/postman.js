const express = require("express");
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  const query=parseInt(req.query.id)
  const filterData=userData.filter((data)=>data.id===query)
  res.json(filterData)
});
// Filter by ID + name: (query)
// app.post("/user", (req, res) => {
//   const { id, name } = req.query;
//   const filterData = userData.filter(
//     (data) => data.id === parseInt(id) && data.name === name
//   );
//   res.json(filterData);
// });



app.get("*", (req, res) => {
  res.json("No route available");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("server running..");
});
