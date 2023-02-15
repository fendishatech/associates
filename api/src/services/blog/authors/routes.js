import express from "express";

import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "./controller.js";

const authorRouter = express.Router();

authorRouter.get(`/authors/`, getAuthors);
authorRouter.post(`/authors/`, createAuthor);
authorRouter.get(`/authors/:id`, getAuthorById);
authorRouter.put(`/authors/:id`, updateAuthor);
authorRouter.delete(`/authors/:id`, deleteAuthor);

export default authorRouter;
