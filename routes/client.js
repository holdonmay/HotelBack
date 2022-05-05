const express = require('express');

const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/create',clientController.create)
router.put('/update/:id',clientController.update)
router.delete('/delete',clientController.delete)
router.get('/find',clientController.index)

module.exports = router;