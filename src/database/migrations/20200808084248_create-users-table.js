const onUpdateTrigger = require('../knex-triggers/on-update');

exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id');
  table.text('name').unique().notNullable();
  table.timestamp('created_at').default(knex.fn.now());
  table.timestamp('updated_at').default(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('users')));

exports.down = knex => knex.schema.dropTable('users');
