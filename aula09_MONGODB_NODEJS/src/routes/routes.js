const express = require ('express');
const routes = express.Router();

const invoiceController = require("../controllers/invoiceController.js");

routes.get('/invoice', invoiceController.index);
routes.get('/invoice/:id', invoiceController.details);
routes.post('/invoice', invoiceController.insert);
routes.put('/invoice/:id', invoiceController.update);
routes.delete('/invoice/:id', invoiceController.delete);

module.exports = routes;