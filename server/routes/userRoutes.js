const userRoute = app => {
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'tien@gmail.com' && password === '123123') {
      return res.status(200).end();
    }
    return res.status(401).end();
  });

  app.post('/api/register', (req, res) => {
    const { userName, userRole, password, reTypePassword } = req.body;
    return res
      .status(200)
      .json(req.body)
      .end();
  });

  app.post('/api/me', (req, res) => {
    const data = {
      userName: 'tien@gmail.com'
    };
    return res.send(data).end();
  });
};

export default userRoute;
