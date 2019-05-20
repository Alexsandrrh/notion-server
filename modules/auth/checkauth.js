module.exports = (req, res, data) => {
  if (req.body === undefined) {
    res.status(401).send('Unauthorized');
  } else {
    res.json(data);
  }
};
