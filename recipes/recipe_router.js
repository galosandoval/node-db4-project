const express = require("express");

const Recipes = require("./recipe_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipe) => {
      res.status(200).json({ recipe });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id/list", (req, res) => {
  const id = req.params.id;
  Recipes.getShoppingList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;
  Recipes.getInstruction(id)
    .then((i) => {
      res.status(200).json(i);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
