import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  ticketID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  startTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  day: {
    type: Sequelize.DATE,
    allowNull: false
  },
  busID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  seatNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
