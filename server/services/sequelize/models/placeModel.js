import Sequelize from 'sequelize';
import { sequelizeInstance } from '../index';

export const placeModel = sequelizeInstance.define('place', {
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

export const createPlaceTable = placeModel.sync({ force: false }).then(() => {
  places.forEach(place => {
    return placeModel.create({
      placeName: place
    });
  });
});
