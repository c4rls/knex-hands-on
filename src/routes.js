const { Router } = require('express');

const userController = require('./controllers/user');

const routes = Router();

routes.get('/users', userController.listAll);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;
