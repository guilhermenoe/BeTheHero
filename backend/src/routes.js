const express = require("express");

const OngController = require("./Controllers/OngControllers");
const IncidentsController = require("./Controllers/IncidentsController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

const routes = express.Router(); // Desacoplandos as rotas do index.js para cá.

routes.post('/sessions', SessionController.create); 

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);


routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);

routes.delete("/incidents/:id",IncidentsController.delete);

module.exports = routes;


