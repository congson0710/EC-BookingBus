import Sequelize from 'sequelize';
import _ from 'lodash';

import { sequelizeInstance } from '../index';
import { faker } from '../../faker';
import { randomRoleID } from '../../../utils';

export const userModel = sequelizeInstance.define('user', {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: { type: Sequelize.STRING, allowNull: false },
  userPassword: { type: Sequelize.STRING, allowNull: false },
  userName: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.STRING, allowNull: false },
  roleID: { type: Sequelize.INTEGER, allowNull: false }
});

export const createUserTable = userModel.sync({ force: false }).then(() => {
  _.times(100, () => {
    return userModel.create({
      email: faker.internet.email(),
      userPassword: faker.internet.password(),
      userName: faker.name.findName(),
      phone: faker.phone.phoneNumberFormat(),
      roleID: randomRoleID()
    });
  });
});
