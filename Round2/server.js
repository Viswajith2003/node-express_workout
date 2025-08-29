const express = require("express");
const app = express();
const path = require("path");

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Optional: clean routes without .html
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Catch-all 404
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
