const express = require("express");

const authController = require("./controller.js");

const authRouter = express.Router();

authRouter.get(`/register`, authController.register);
authRouter.get(`/login`, authController.login);
authRouter.post(`/logout`, authController.logout);

module.exports = authRouter;
