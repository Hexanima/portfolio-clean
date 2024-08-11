import express, { Request, Response } from "express";

const app = express();
app.listen(3000, () => {
  console.log("Listening");
});

app.use("/", (req: Request, res: Response) => {
  res.json(req.query);
});
