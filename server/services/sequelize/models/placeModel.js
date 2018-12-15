import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

const places = [
  'Tp Hồ Chí Minh',
  'Đà Lạt',
  'Nha Trang',
  'Đà Nẵng',
  'Quy Nhơn',
  'Phú Yên',
  'Bình Định',
  'Tuy Hòa',
  'Cà Mau',
  'Huế'
];

const PlaceModel = sequelizeInstance.define('place', {
  placeID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  placeName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// placeModel.sync({ force: true }).then(() => {
//   places.forEach(place => {
//     return PlaceModel.create({
//       placeName: place
//     });
//   });
// });

export default PlaceModel;
