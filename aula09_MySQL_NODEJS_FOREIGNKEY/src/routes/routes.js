const express = require('express');
const Invoicecontroller = require ('../controllers/InvoiceController.js');
const Personcontroller = require ('../controllers/PersonController.js');
const router = express.Router();

router.get('/invoice', Invoicecontroller.SearchAll);
router.get('/invoice/:id', Invoicecontroller.SearchOne);
router.post('/invoice', Invoicecontroller.Insert);
router.put('/invoice/:id', Invoicecontroller.Update);
router.delete('/invoice/:id', Invoicecontroller.Delete);


router.get('/person', Personcontroller.SearchAll);
router.get('/person/:id', Personcontroller.SearchOne);
router.post('/person', Personcontroller.Insert);
router.put('/person/:id', Personcontroller.Update);
router.delete('/person/:id', Personcontroller.Delete);

module.exports = router;