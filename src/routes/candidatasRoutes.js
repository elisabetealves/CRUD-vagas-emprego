const express = require('express');
const router = express.Router();
const controller = require('../controllers/candidataController');

router.get('/all', controller.getAll);
router.get('/:id', controller.getById);

router.post('/create', controller.create);

router.put('/:id', controller.updateAll);
router.patch('/:id', controller.updateOne);

router.delete('/:id', controller.deleteOne);

module.exports = router