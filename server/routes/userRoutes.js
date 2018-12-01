module.exports = app => {
  app.get('/api/init-route', (req, res) => {
    const result = { result: 'success' };
    res.send(result);
  });
};
