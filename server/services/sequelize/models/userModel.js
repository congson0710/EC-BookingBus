import Sequelize from 'sequelize';
import _ from 'lodash';
import md5 from 'md5';

import { sequelizeInstance } from '../index';

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
}, {
  hooks: {
    beforeUpdate: (user) => {
      if (user.userPassword) user.userPassword = md5(user.userPassword);
    },
    beforeCreate: (user) => {
      if (user.userPassword) user.userPassword = md5(user.userPassword);
    }
  } 
});

// export const createUserTable = userModel.sync({ force: true }).then(() => {
//   _.times(100, () => {
//     return userModel.create({
//       email: faker.internet.email(),
//       userPassword: faker.internet.password(),
//       userName: faker.name.findName(),
//       phone: faker.phone.phoneNumberFormat(),
//       roleID: randomRoleID()
//     });
//   });
// });
