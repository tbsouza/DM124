const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.get('/', (request, response) => {
  response.json([
    'Thiago',
    'Edy'
  ])
});

module.exports = router;