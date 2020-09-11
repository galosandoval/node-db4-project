exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (tbl) => {
      tbl.increments();

      tbl.text("ingredient_name", 20).notNullable().unique();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();

      tbl.text("description", 128).notNullable();

      tbl.integer('recipe_id').unsigned()
        .notNullable()
        .references("recipe.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("recipes", (tbl) => {
      tbl.increments('recipe_id');

      tbl
        // default foreign key methods
        .integer("ingredients_id")
        .unsigned() // support only positive numbers
        .notNullable()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("steps.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.float("amount_needed").unsigned().notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients");
};
