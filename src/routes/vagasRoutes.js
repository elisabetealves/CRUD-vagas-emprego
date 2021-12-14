const express = require('express');
const router = express.Router();
const controller = require('../controllers/vagaController');

router.get('/all', controller.getAll);
router.get('/:id', controller.getOne);

router.post('/create', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.deleteOne);

module.exports = router