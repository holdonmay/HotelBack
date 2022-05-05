const express = require('express');

const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/create',serviceController.create)
router.put('/update/:id',serviceController.updater)
router.delete('/delete/:id',serviceController.delete)
router.get('/find',serviceController.index)

module.exports = router;