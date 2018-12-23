const bookingRoutes = app => {
  app.post('/api/book-ticket/:ticketID', (req, res) => {
    try {
      console.log('params', req.params);
      res.status(200).send('success');
    } catch (error) {
      console.error(error);
    }
  });
};

export default bookingRoutes;
