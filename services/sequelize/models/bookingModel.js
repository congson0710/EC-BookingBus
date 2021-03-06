import Sequelize from 'sequelize';
import {sequelizeInstance} from '../index';

const BookingModel = sequelizeInstance.define('booking', {
  bookingID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ticketID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

// BookingModel.sync({force: true});

export default BookingModel;
