const express = require("express");

const candidateController = require("./controller.js");

const candidateRouter = express.Router();

candidateRouter.get(`/`, candidateController.getCandidates);
candidateRouter.post(`/`, candidateController.createCandidate);
candidateRouter.get(`/:id`, candidateController.getCandidateById);
candidateRouter.put(`/:id`, candidateController.updateCandidate);
candidateRouter.delete(`/:id`, candidateController.deleteCandidate);

module.exports = candidateRouter;
