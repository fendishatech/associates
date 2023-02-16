const express = require("express");

const jobController = require("./controller.js");

const jobRouter = express.Router();

jobRouter.get(`/`, jobController.getJobs);
jobRouter.post(`/`, jobController.createJob);
jobRouter.get(`/:id`, jobController.getJobById);
jobRouter.put(`/:id`, jobController.updateJob);
jobRouter.delete(`/:id`, jobController.deleteJob);

module.exports = jobRouter;
