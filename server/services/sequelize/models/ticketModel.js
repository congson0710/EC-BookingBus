import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

sequelizeInstance.define('bus', {
  ticketID: {
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
  busID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  busCompanyID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  startTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  day: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.TINYINT,
    allowNull: false
  }
});
