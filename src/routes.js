const { Router } = require('express');

const userController = require('./controllers/user');
const projectController = require('./controllers/project');

const routes = Router();

routes
  // users
  .get('/users', userController.listAll)
  .post('/users', userController.create)
  .put('/users/:id', userController.update)
  .delete('/users/:id', userController.delete)

  // projects
  .get('/projects', projectController.list)
  .post('/projects', projectController.create)
  .delete('/projects/:id', projectController.delete)

module.exports = routes;
