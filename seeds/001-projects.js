
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Make Snowman', description: 'How to make a snowman.', completed: true},
        {name: 'Make Pizza', description: 'How to make and eat a pizza.', completed: false},
        {name: 'Do Homework', description: 'How to do homework.', completed: false}
      ]);
    });
};
