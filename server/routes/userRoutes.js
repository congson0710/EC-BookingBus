import jwt from 'jsonwebtoken';
import { userModel } from '../services/sequelize/models/userModel';
import { JWT } from '../config';
import { getIdFromToken } from '../utils/auth';
import { convertEntityToJSON } from '../lib/model';

const userRoute = app => {
  app.post('/api/login', async (req, res) => {
    const { email, userPassword } = req.body;
    try {
      const currentUser = await userModel.findOne({
        where: { email, userPassword },
        attributes: { exclude: ['userPassword'] },
        raw: true
      });
      if (currentUser) {
        const token = jwt.sign({ userID: currentUser.userID }, JWT.secret);
        return res.json({ currentUser, token, message: 'Login successfully!' });
      }
      throw new Error('Incorrect email or password.');
    } catch (error) {
      return res.status(401).json({ message: error.message || 'Unexpected error.' });
    }
  });

  app.post('/api/register', (req, res) => {
    const { userName, userRole, password, reTypePassword } = req.body;
    return res
      .status(200)
      .json(req.body)
      .end();
  });

  app.post('/api/me', getIdFromToken, async (req, res) => {
    const { userID } = req.userID;
    try {
      const user = await userModel.findOne({
        where: { userID },
        attributes: { exclude: ['userPassword'] },
        raw: true
      });
      return res.json(user).end();
    } catch (error) {
      return res
        .status(403)
        .send('Unauthorize!')
        .end();
    }
  });

  app.patch('/api/user/update', getIdFromToken, async (req, res) => {
    const { userID } = req.userID;
    const { userName, phone } = req.body;
    try {
      const user = await userModel.findOne({
        where: { userID },
        attributes: { exclude: ['userPassword'] }
      });
      await user.update({
        phone,
        userName
      });
      return res.json({ message: 'Update info successfully!', ...convertEntityToJSON(user)}).end();
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.message})
        .end();
    }
  });
};

export default userRoute;
