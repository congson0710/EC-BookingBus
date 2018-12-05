import moment from 'moment';

import { faker } from '../services/faker';
export const randomRoleID = () => Math.floor(Math.random() * 4);

export const randomDayAndTime = () => {
  const random = faker.date.between('2019-01-01', '2019-12-31');
  return {
    time: moment(random).format('LT'),
    day: moment(random).format('DD/MM/YYYY')
  };
};

export const randomBusID = () => faker.random.number({ min: 50, max: 100 });

export const randomBusRouteID = () => faker.random.number({ min: 1, max: 100 });

export const randomBusCompanyID = () =>
  faker.random.number({ min: 1, max: 10 });

export const randomPlaceID = () => faker.random.number({ min: 1, max: 10 });

export const randomSeatNumber = () =>
  `${faker.random.number({ min: 1, max: 10 })}-${faker.random.arrayElement([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  ])}`;
