import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

const companys = [
  'Thành Bưởi',
  'Phương Trang',
  'Hoàng Long',
  'Mai Linh',
  'Hưng Long',
  'Hồng Hải',
  'Hưng Thành'
];

const BusCompanyModel = sequelizeInstance.define('bus_company', {
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

// BusCompanyModel
//   .sync({ force: true })
//   .then(() => {
//     companys.forEach(company => {
//       BusCompanyModel.create({
//         companyName: company
//       });
//     });
//   });

export default BusCompanyModel;
