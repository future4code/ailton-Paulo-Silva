import express, { Express } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("API está funcional");
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
