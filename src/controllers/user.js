const knex = require('../database');

module.exports = {
  listAll: async (req, res) => {
    const results = await knex('users');

    return res.json(results);
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
      await knex('users').update({ name }).where({ id });

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      await knex('users').delete().where({ id });

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
};
