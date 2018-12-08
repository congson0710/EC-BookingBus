import jwt from 'jsonwebtoken';
import { userModel } from '../services/sequelize/models/userModel';
import { JWT } from '../config';

const userRoute = app => {
  app.post('/api/login', async (req, res) => {
    const { email, userPassword } = req.body;
    try {
      const currentUser = await userModel.findOne({
        where: { email, userPassword },
        raw: true
      });
      if (currentUser) {
        const { userPassword, ...rest } = currentUser;
        const token = jwt.sign({ userID: currentUser.userID}, JWT.secret);
        return res.json({ ...rest, token, message: 'Login successfully!' });
      }
      return res.status(401).json({ message: 'Incorrect email or password.' });
    } catch (error) {
      return res.status(400).json({ message: 'Unexpected error.' });
    }
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
