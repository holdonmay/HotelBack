const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/create',roomController.create)
router.put('/update/:id',roomController.update)
router.delete('/delete/:id',roomController.delete)
router.get('/find',roomController.index)


module.exports = router;