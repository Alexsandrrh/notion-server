const router = require('express').Router();
const Doc = require('../database/models/Doc');
const User = require('../database/models/User');

router.get('/doc/:id', (req, res) => {
  Doc.findById(req.params.id)
    .populate('author')
    .then(doc => {
      res.json(doc);
    })
    .catch(() => {
      res.status(500);
    });
});

router.post('/doc', (req, res) => {
  new Doc({
    ...req.body,
    author: '5ce2cfcc330fe53244565b53'
  }).save((err, doc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(doc);
  });
});

module.exports = router;
