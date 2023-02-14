const express = require('express');
const router = express.Router();

const array = [];

router.get('/', (req, res) => {
  res.json({ name: 'frodo' });
});

router.get('/test', (req, res) => res.json({ array }));

router.post('/test', (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

module.exports = router;
