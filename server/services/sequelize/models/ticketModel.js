import Sequelize from 'sequelize';
import _ from 'lodash';

import {randomBusRouteID} from '../../../utils';
import {faker} from '../../faker';
import {BusRouteModel} from './busRouteModel';
import BusModel from './busModel';
import {sequelizeInstance} from '../index';

const TicketModel = sequelizeInstance.define('ticket', {
  ticketID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  busRouteID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// TicketModel.sync({force: true}).then(() => {
//   _.times(1000, () => {
//     return TicketModel.create({
//       busRouteID: randomBusRouteID(),
//       status: faker.random.arrayElement(['SOLD', 'UNSOLD']),
//       price: '220.000 VND',
//     });
//   });
// });
//
export default TicketModel;
