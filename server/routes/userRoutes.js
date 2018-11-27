module.export = app => {
  app.get('/api/v1/init-route', (req, res) => {
    const result = { result: 'success' };
    res.send(result);
  });
};
