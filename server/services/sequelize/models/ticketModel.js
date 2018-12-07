import Sequelize from 'sequelize';
import _ from 'lodash';

import { randomBusRouteID } from '../../../utils';
import { sequelizeInstance } from '../index';
import { faker } from '../../faker';

export const ticketModel = sequelizeInstance.define('ticket', {
  ticketID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  busRouteID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export const createTicketTable = ticketModel.sync({ force: false }).then(() => {
  _.times(1000, () => {
    return ticketModel.create({
      busRouteID: randomBusRouteID(),
      status: faker.random.arrayElement(['SOLD', 'UNSOLD'])
    });
  });
});
