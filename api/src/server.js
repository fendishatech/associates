const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authorRouter = require("./services/blog/authors/routes.js");

dotenv.config();

const app = express();

// MIDDLEWARE
// app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));
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
