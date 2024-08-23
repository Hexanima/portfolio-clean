import express, { Request, Response } from "express";
import { Db, MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import { Experience } from "app-domain";
dotenv.config();

const app = express();

const uri = process.env.MONGO_URI;
console.log("URL: " + uri);

//MONGO CONFIG
let connection;
let db: Db;
const client = new MongoClient(uri as string);
try {
  connection = await client.connect();
  db = connection.db("testing");
} catch {
  console.log("SOMETHING FAILED SETTING CONNECTION");
}
//END MONGO CONFIG

app.get("/", async (req: Request, res: Response) => {
  const collection = await db.collection<Experience>("messages");
  const result = await collection.find({}).toArray();
  console.log(result);
  res.json(result);
});
app.get("/add", async (req: Request, res: Response) => {
  const collection = await db.collection<Experience>("messages");
  try {
    const { startDate, title } = req.query;
    const result = await collection.insertOne({
      description: [],
      id: "",
      startDate: (startDate as string) || "Inicio",
      title: (title as string) || "Titulo",
      workplace: { name: "", id: "" },
    });
    if (result.acknowledged) {
      res.json("Record added! ID: " + JSON.stringify(result.insertedId));
    } else {
      throw new Error("Something happened");
    }
  } catch (error) {
    res.json(error);
  }
});

app.get("/clear", async (req: Request, res: Response) => {
  const collection = await db.collection("messages");
  try {
    const result = await collection.deleteMany({});

    res.json("Deleted: " + result.acknowledged);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log("Listening");
});
