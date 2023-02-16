const express = require("express");

const experienceController = require("./controller.js");

const experienceRouter = express.Router();

experienceRouter.get(`/`, experienceController.getExperiences);
experienceRouter.post(`/`, experienceController.createExperience);
experienceRouter.get(`/:id`, experienceController.getExperienceById);
experienceRouter.put(`/:id`, experienceController.updateExperience);
experienceRouter.delete(`/:id`, experienceController.deleteExperience);

module.exports = experienceRouter;
