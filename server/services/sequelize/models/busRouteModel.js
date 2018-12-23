import Sequelize from 'sequelize';
import _ from 'lodash';

import { sequelizeInstance } from '../index';

import {
  randomBusID,
  randomDayAndTime,
  randomPlaceID,
  randomSeatNumber
} from '../../../utils';
import { TicketModel } from './ticketModel';
import { BusModel } from './busModel';

const BusRouteModel = sequelizeInstance.define('bus_route', {
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
  seatNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  day: {
    type: Sequelize.STRING,
    allowNull: false
  },
  busID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// BusRouteModel.sync({ force: true }).then(() => {
//   _.times(100, () => {
//     return BusRouteModel.create({
//       startPlaceID: randomPlaceID(),
//       endPlaceID: randomPlaceID(),
//       seatNumber: randomSeatNumber(),
//       startTime: randomDayAndTime().time,
//       day: randomDayAndTime().day,
//       busID: randomBusID()
//     });
//   });
// });

export default BusRouteModel;
