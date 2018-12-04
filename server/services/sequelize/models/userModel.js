import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

export const userModel = sequelizeInstance.define('user', {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: { type: Sequelize.STRING, allowNull: false },
  userPassword: { type: Sequelize.STRING, allowNull: false },
  userName: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.STRING, allowNull: false },
  roleID: { type: Sequelize.INTEGER, allowNull: false },
  createdAt: { type: Sequelize.DATE, allowNull: false, default: Date.now() },
  updatedAt: { type: Sequelize.DATE, allowNull: false, default: Date.now() }
});
