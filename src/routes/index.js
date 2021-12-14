const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "Title": "CRUD - Vagas de Empregos",
        "Version": "1.0.0",
        "Message": "Seja bem-vindx (:"
    });
});

module.exports = router;