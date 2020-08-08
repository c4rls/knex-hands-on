exports.seed = knex => knex('projects').del()
  .then(() => knex('users').then(results => knex('projects').insert([
    { title: 'project one', user_id: results[0].id },
    { title: 'project two', user_id: results[0].id },
    { title: 'project three', user_id: results[1].id },
    { title: 'project four', user_id: results[2].id },
  ])
  )
  );
;
