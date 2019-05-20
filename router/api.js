const router = require('express').Router();

const apiResponse = (req, res) => {
  res.json({
    message: 'Url is not correct'
  });
};

router.get('/', apiResponse);
router.post('/', apiResponse);
router.put('/', apiResponse);
router.delete('/', apiResponse);

module.exports = router;
