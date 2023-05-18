import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ saludo: "humano" });
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ data });
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Running server port on ", 4000);
});
