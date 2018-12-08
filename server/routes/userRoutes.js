import passport from 'passport';

const userRoute = app => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;
    if (user) {
      const { userPassword, ...rest } = user;

      return res.json({ ...rest, message: 'Login successfully!' });
    }
    return res.status(401).json({ message: 'Incorrect email or password.' });
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
