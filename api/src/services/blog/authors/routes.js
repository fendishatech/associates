import express from "express";

import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "./controller.js";

const authorRouter = express.Router();

authorRouter.get(`/`, getAuthors);
authorRouter.post(`/`, createAuthor);
authorRouter.get(`/:id`, getAuthorById);
authorRouter.put(`/:id`, updateAuthor);
authorRouter.delete(`/:id`, deleteAuthor);

export default authorRouter;
