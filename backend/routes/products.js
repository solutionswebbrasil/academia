const express = require('express');
const router = express.Router();

// Sample route for products
router.get('/products', (req, res) => {
    res.send('List of products');
});

module.exports = router;
