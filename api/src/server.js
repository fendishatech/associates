const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authorRouter = require("./services/blog/authors/routes.js");
const blogRouter = require("./services/blog/blogs/routes.js");
const experienceRouter = require("./services/experience/routes.js");
const jobRouter = require("./services/job/jobs/routes.js");
const candidateRouter = require("./services/job/candidates/routes.js");

dotenv.config();

const app = express();

// MIDDLEWARE
// app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/api/authors", authorRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/experiences", experienceRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/candidates", candidateRouter);
app.use("/api/", (req, res) => {
  res.json({
    Greetings: "Hello User",
  });
});

// SERVER
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
