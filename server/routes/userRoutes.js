import jwt from 'jsonwebtoken';
import md5 from 'md5';

import UserModel from '../services/sequelize/models/userModel';
import { JWT } from '../config';
import { getIdFromToken } from '../utils/auth';
import { convertEntityToJSON } from '../lib/model';

const userRoute = app => {
  app.post('/api/login', async (req, res) => {
    const { email, userPassword } = req.body;
    const hashPassword = md5(userPassword)
    try {
      const currentUser = await UserModel.findOne({
        where: { email, userPassword: hashPassword },
        attributes: { exclude: ['userPassword'] },
        raw: true
      });
      if (currentUser) {
        const token = jwt.sign({ userID: currentUser.userID }, JWT.secret);
        return res.json({ currentUser, token, message: 'Login successfully!' });
      }
      throw new Error('Incorrect email or password.');
    } catch (error) {
      return res
        .status(401)
        .json({ message: error.message || 'Unexpected error.' });
    }
  });

  app.post('/api/register', async (req, res) => {
    const { email, password, phone, userName, userRole } = req.body;
    try {
      const user = await UserModel.findOne({
        where: { email },
        raw: true
      });
      if (user) {
        throw new Error('Email address already in use.');
      }
      if (!phone.match(/^[0-9]+$/)) {
        throw new Error('Invalid phone number.')
      }
      await UserModel.create({
        email,
        userPassword: password,
        phone,
        userName,
        roleID: userRole
      });
      return res.json({ message: 'Register successfully!' });
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
        .end();
    }
  });

  app.post('/api/me', getIdFromToken, async (req, res) => {
    const { userID } = req.userID;
    try {
      const user = await UserModel.findOne({
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
    const { userName, phone, oldPassword, newPassword } = req.body;
    try {
      if (userName && phone) {
        const user = await UserModel.findOne({
          where: { userID },
          attributes: { exclude: ['userPassword'] }
        });
        await user.update({
          phone,
          userName
        });
        return res
          .json({ message: 'Successfully!', ...convertEntityToJSON(user) })
          .end();
      } else {
        const user = await UserModel.findOne({
          where: { userID }
        });
        if (user.userPassword !== md5(oldPassword)) {
          throw new Error('Wrong password!')
        }
        await user.update({ userPassword: newPassword });
        return res.json({ message: 'Successfully!' }).end();
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.message })
        .end();
    }
  });
};

export default userRoute;
