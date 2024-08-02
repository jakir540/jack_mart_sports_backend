import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import router from "./routes";

app.use(express.json());
app.use(cors());

// app route

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("jack mart sport shop running");
});

export default app;
