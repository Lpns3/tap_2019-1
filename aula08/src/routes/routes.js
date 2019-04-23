const express = require('express');
const controller = require ('../controllers/InvoiceController.js');
const router = express.Router();

router.get('/invoice/:id', controller.SearchOne);
router.post('/invoice', controller.Insert);
router.put('/invoice/:id', controller.Update);
router.delete('/invoice/:id', controller.Delete);

module.exports = router;