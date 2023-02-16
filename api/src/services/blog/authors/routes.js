const express = require("express");

const authController = require("./controller.js");

const authorRouter = express.Router();

authorRouter.get(`/`, authController.getAuthors);
authorRouter.post(`/`, authController.createAuthor);
authorRouter.get(`/:id`, authController.getAuthorById);
authorRouter.put(`/:id`, authController.updateAuthor);
authorRouter.delete(`/:id`, authController.deleteAuthor);

module.exports = authorRouter;
