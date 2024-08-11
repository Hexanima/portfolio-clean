import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Aloh");
});

app.use("/", (req, res) => {
  res.json(req.query);
});
