import Sequelize from 'sequelize';
import _ from 'lodash';

import { randomBusCompanyID } from '../../../utils';
import { ticketModel } from './ticketModel';
import { sequelizeInstance } from '../index';

const BusModel = sequelizeInstance.define('bus', {
  busID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  busCompanyID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalSeat: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

BusModel.sync({ force: true }).then(() => {
  _.times(100, () => {
    return BusModel.create({
      busCompanyID: randomBusCompanyID(),
      totalSeat: 30
    });
  });
});

export default BusModel;
