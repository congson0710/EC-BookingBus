import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  busCompanyID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
