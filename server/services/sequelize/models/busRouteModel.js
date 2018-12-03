import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  routeID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  routeName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
