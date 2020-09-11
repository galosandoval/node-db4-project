const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstruction
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join("recipes", "recipes.ingredients_id", "ingredients.id")
    .where("recipe_id", recipe_id)
    .select("ingredients.ingredient_name", "recipes.amount_needed");
}

function getInstruction(recipe_id) {
  return db("steps").where("recipe_id", recipe_id);
}
