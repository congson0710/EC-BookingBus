import jwt from 'jsonwebtoken';
import { JWT } from '../config';

export function getIdFromToken(req, res, next) {
  const token = req.headers.authorization ? req.headers.authorization.split(' ')[1]: '';
  req.userID = token ? jwt.verify(token, JWT.secret) : '';
  next();
}