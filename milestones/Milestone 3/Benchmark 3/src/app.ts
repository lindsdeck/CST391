import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router as centersRouter } from "./centers/centers.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Little Care Finder API is running!");
});

app.use("/api/centers", centersRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});