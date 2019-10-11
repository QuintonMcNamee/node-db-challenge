
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'Shovel the snow.', notes: '', completed: true},
        {project_id: 1, description: 'Get some snow and pack it together in your hands.', notes: 'Brrr.', completed: true},
        {project_id: 1, description: 'Roll snow into a ball.', notes: '', completed: false},
        {project_id: 1, description: 'Stack 3 snowballs on top of eachother', notes: 'Adding accessories is encouraged but not required.', completed: false},
        {project_id: 2, description: 'Make a roll pizza dough.', notes: '', completed: false},
        {project_id: 2, description: 'Place desired toppings on pizza.', notes: 'Pepperoni is the best topping.', completed: false},
        {project_id: 2, description: 'Place the pizza in the oven.', notes: 'Don\'t burn yourself', completed: false},
        {project_id: 3, description: 'Get your homework and pencil from your backback.', notes: '', completed: false},
        {project_id: 3, description: 'Throw your homework in the trash.', notes: 'Homework is for nerds.', completed: false}
      ]);
    });
};
