import express from "express";
import router from "./router.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World!" });
});

app.use("/api", router);

export default app;
