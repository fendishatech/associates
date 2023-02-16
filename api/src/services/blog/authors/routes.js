const express = require("express");

const authorController = require("./controller.js");

const authorRouter = express.Router();

authorRouter.get(`/`, authorController.getAuthors);
authorRouter.post(`/`, authorController.createAuthor);
authorRouter.get(`/:id`, authorController.getAuthorById);
authorRouter.put(`/:id`, authorController.updateAuthor);
authorRouter.delete(`/:id`, authorController.deleteAuthor);

module.exports = authorRouter;
