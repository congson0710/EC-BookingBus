import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('place', {
  placeID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  placeName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
