import { userModel } from '../services/sequelize/models/userModel';
import passport from 'passport';

const userRoute = app => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;
    const { id, email, userName, phone, roleID } = user;
    return res.json({ id, email, userName, phone, roleID });
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
