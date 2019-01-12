import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

const roles = ['ADMIN', 'USER', 'GUEST', 'BUS_COMPANY'];

const RoleModel = sequelizeInstance.define('role', {
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

// RoleModel.sync({ force: true }).then(() => {
//   roles.forEach(role => {
//     return RoleModel.create({
//       roleName: role
//     });
//   });
// });

export default RoleModel;
