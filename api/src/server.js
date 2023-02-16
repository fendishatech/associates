import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authorRouter from "./services/blog/authors/routes.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/api/authors", authorRouter);
app.use("/api/", (req, res) => {
  res.json({
    Greetings: "Hello User",
  });
});

// SERVER
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
