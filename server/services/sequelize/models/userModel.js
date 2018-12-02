import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('user', {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userName: { type: Sequelize.STRING, allowNull: false },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  userPassword: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.STRING, allowNull: false },
  isAdmin: { type: Sequelize.TINYINT, allowNull: true },
  createdAt: { type: Sequelize.DATE, allowNull: false, default: Date.now() },
  updatedAt: { type: Sequelize.DATE, allowNull: false, default: Date.now() }
});
