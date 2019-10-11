
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Shovel', description: 'Used to shovel snow.'},
        {name: 'Mittens', description: 'Used to keep hands warm.'},
        {name: 'Hat', description: 'Used to keep head warm.'},
        {name: 'Jacket', description: 'Used to keep body warm.'},
        {name: 'Oven', description: 'Used to cook pizza.'},
        {name: 'Pencil', description: 'Used to write homework.'}
      ]);
    });
};
