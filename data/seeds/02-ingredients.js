
exports.seed = function(knex) {
  const ingredients = [
    {
      ingredient_name: 'Peanut Butter (tbls)'
    },
    {
      ingredient_name: 'Your Favorite Jame (tbls)'
    },
    {
      ingredient_name: 'Bread (slice)'
    }
  ]
  return knex('ingredients').insert(ingredients)
};
