exports.seed = function (knex) {
  const steps = [
    {
      description: "spread peanut butter on one slice of bread",
      recipe_id: 1,
    },
    {
      description: "spread jam on the other slice",
      recipe_id: 1,
    },
    {
      description: "press both slices together",
      recipe_id: 1,
    },
  ];
  return knex("steps").insert(steps);
};
