const knex = require('../database');

module.exports = {
  list: async (req, res, next) => {
    const { user_id, page = 1 } = req.query;

    try {
      const query = knex('projects').limit(5).offset((page - 1) * 5);
      const countObj = knex('projects').count();

      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'users.id', '=', 'projects.user_id')
          .select('projects.*', 'users.name');

        countObj
          .where({ user_id });
      }

      const [count] = await countObj;
      res.header('X-Total-Count', count['count']);

      const results = await query;

      return res.json(results);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    const { title, user_id } = req.body;

    try {
      await knex('projects').insert({ title, user_id });

      return res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      await knex('projects').delete().where({ id });

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },
};
