exports.seed = function (knex) {
  const ingredients = [
    {
      ingredient_name: "Peanut Butter (tbls)",
    },
    {
      ingredient_name: "Your Favorite Jam (tbls)",
    },
    {
      ingredient_name: "Bread (slice)",
    },
  ];
  return knex("ingredients").insert(ingredients);
};
