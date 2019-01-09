import Sequelize from 'sequelize';
import _ from 'lodash';

import { randomBusCompanyID } from '../../../utils';
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
  },
  numberPlate: Sequelize.STRING,
  allowNull: false
});
// BusModel.sync({ force: true }).then(() => {
//   return BusModel.create({
//     busCompanyID: randomBusCompanyID(),
//     totalSeat: 30,
//     numberPlate: '81S1-5647'
//   });
// });

export default BusModel;
