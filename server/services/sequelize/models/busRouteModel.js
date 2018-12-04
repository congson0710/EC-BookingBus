import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  routeID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  startPlaceID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  endPlaceID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  day: {
    type: Sequelize.DATE,
    allowNull: false
  },
  busID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
