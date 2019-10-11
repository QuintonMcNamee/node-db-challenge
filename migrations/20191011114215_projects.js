
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.text('name', 128)
            .notNullable()
            .unique();
        table.text('description', 128);
        table.boolean('completed')
            .defaultTo(false);
    })
    .createTable('resources', table => {
        table.increments();
        table.text('name', 128)
            .notNullable()
            .unique();
        table.text('description', 128)
    })
    .createTable('tasks', table => {
        table.increments();
        table.text('description', 128)
            .notNullable();
        table.text('notes', 128);
        table.boolean('completed')
            .defaultTo(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
