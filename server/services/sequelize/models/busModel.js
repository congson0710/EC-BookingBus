import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  busID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  seatNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalSeat: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
