const knex = require('../database');

module.exports = {
  listAll: async (req, res, next) => {
    try {
      const results = await knex('users').where({ deleted_at: null });

      return res.json(results);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    const { name } = req.body;

    try {
      await knex('users').insert({ name });

      return res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const [user] = await knex('users').where({ id });

      if (user.deleted_at) return res.status(400).json({ message: 'deleted user' });

      await knex('users').update({ name }).where({ id });

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      await knex('users')
        .update({ deleted_at: new Date() })
        .where({ id });

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
};
