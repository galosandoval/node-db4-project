
exports.seed = function(knex) {
  const recipes = [
    {
      ingredients_id: '1',
      step_id: '1',
      amount_needed: 1
    },
    {
      ingredients_id: '2',
      step_id: '2',
      amount_needed: 1
    },
    {
      ingredients_id: '3',
      step_id: '3',
      amount_needed: 2
    }
  ]
  return knex('recipes').insert(recipes)
};
