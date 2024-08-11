const express = require('express');
const router = express.Router();

// Sample route for teachers
router.get('/teachers', (req, res) => {
    res.send('List of teachers');
});

module.exports = router;
