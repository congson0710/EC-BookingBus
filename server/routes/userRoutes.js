const userRoute = app => {
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ where: { email } });
    console.log('>>>>>>',user);
    if (user) {
      return res.status(200).json(user).end();
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
