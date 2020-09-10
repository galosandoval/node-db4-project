const express = require("express");

const server = express();

const recipeRouter = require('./recipes/recipe_router')
server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;
