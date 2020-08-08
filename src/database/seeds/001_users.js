exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert([
    { name: 'sasuke' },
    { name: 'naruto' },
    { name: 'sakura' }
  ])
  );
;
