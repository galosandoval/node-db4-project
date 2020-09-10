
exports.seed = function(knex) {
  const steps = [
    {
      description: 'spread peanut butter on one slice of bread'
    },
    {
      description: 'spread jam on the other slice'
    },
    {
      description: 'press both slices together'
    }
  ]
  return knex('steps').insert(steps)
};
