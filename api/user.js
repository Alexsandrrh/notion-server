const router = require('express').Router();
const User = require('../database/models/User');

router.get('/user', (req, res) => {
  if (req.body === undefined) {
    res.status(401);
  } else {
    User.findById(req.user)
      .populate('docsList')
      .then(user => {
        res.json(user);
      })
      .catch(() => {
        res.status(401);
      });
  }
});

module.exports = router;
