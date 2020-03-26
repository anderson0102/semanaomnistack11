const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//Rotas de Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//Rotas de incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//Rotas de Controle de Ongs
routes.get('/profile', ProfileController.index);
//Rota para Login do Sistema
routes.post('/sessions', SessionController.create);

module.exports = routes;