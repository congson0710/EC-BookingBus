import jwt from 'jsonwebtoken';
import { JWT } from '../config';

export function getIdFromToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  req.userID = jwt.verify(token, JWT.secret);
  next();
}