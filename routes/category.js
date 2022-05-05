const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/create',
[
    check('name','A name is required for the category').not().isEmpty(),
    check('price', 'A price is required for the category').not().isEmpty()
]
,categoryController.create)
router.put('/update/:id', categoryController.update)
router.delete('/delete/:id',categoryController.delete)
router.get('/find', categoryController.index)

module.exports = router;