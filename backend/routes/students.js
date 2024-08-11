const express = require('express');
const router = express.Router();

// Sample route for students
router.get('/students', (req, res) => {
    res.send('List of students');
});

module.exports = router;
