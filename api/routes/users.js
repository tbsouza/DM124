const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.json([
    'Thiago',
    'Edy'
  ])
});

module.exports = router;