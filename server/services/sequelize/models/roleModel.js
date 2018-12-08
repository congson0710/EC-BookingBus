import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

export const roleModel = sequelizeInstance.define('role', {
  roleID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  roleName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const roles = ['ADMIN', 'USER', 'GUEST', 'BUS_COMPANY'];

// export const createRoleTable = roleModel.sync({ force: true }).then(() => {
//   roles.forEach(role => {
//     return roleModel.create({
//       roleName: role
//     });
//   });
// });
