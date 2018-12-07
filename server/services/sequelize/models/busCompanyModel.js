import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

export const busCompanyModel = sequelizeInstance.define('bus_company', {
  busCompanyID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const companys = [
  'Thành Bưởi',
  'Phương Trang',
  'Hoàng Long',
  'Mai Linh',
  'Hưng Long',
  'Hồng Hải',
  'Hưng Thành'
];

// export const createBusCompanyTable = busCompanyModel
//   .sync({ force: false })
//   .then(() => {
//     companys.forEach(company => {
//       busCompanyModel.create({
//         companyName: company
//       });
//     });
//   });
