import Sequelize from 'sequelize';
import _ from 'lodash';

import { sequelizeInstance } from '../index';
import { randomBusCompanyID } from '../../../utils';

export const busModel = sequelizeInstance.define('bus', {
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

// export const createBusTable = busModel.sync({ force: false }).then(() => {
//   _.times(100, () => {
//     return busModel.create({
//       busCompanyID: randomBusCompanyID(),
//       totalSeat: 30
//     });
//   });
// });
