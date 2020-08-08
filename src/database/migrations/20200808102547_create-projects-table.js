exports.up = knex => knex.schema.createTable('projects', table => {
  table.increments('id');
  table.text('title').notNullable();

  table.integer('user_id')
    .references('users.id')
    .onDelete('CASCADE')
    .notNullable();

  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('projects');
