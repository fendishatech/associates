const express = require("express");

const blogController = require("./controller.js");

const blogRouter = express.Router();

blogRouter.get(`/`, blogController.getBlogs);
blogRouter.post(`/`, blogController.createBlog);
blogRouter.get(`/:id`, blogController.getBlogById);
blogRouter.put(`/:id`, blogController.updateBlog);
blogRouter.delete(`/:id`, blogController.deleteBlog);

module.exports = blogRouter;
