import moment from 'moment';

import { sequelizeInstance } from '../services/sequelize';
import {
  USER_MODEL,
  TICKET_MODEL,
  ROLE_MODEL,
  PLACE_MODEL,
  BUS_COMPANY_MODEL,
  BUS_MODEL,
  BUS_ROUTE_MODEL
} from '../services/sequelize/modelName';
import { createUserTable } from '../services/sequelize/models/userModel';
import { createTicketTable } from '../services/sequelize/models/ticketModel';
import { createRoleTable } from '../services/sequelize/models/roleModel';
import { createPlaceTable } from '../services/sequelize/models/placeModel';
import { createBusCompanyTable } from '../services/sequelize/models/busCompanyModel';
import { createBusRouteTable } from '../services/sequelize/models/busRouteModel';
import { createBusTable } from '../services/sequelize/models/busModel';

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

export const isModelDefined = modelName =>
  sequelizeInstance.isDefined(modelName);

export const isUserModelDefined = isModelDefined(USER_MODEL);
export const isTicketModelDefined = isModelDefined(TICKET_MODEL);
export const isRoleModelDefined = isModelDefined(ROLE_MODEL);
export const isPlaceModelDefined = isModelDefined(PLACE_MODEL);
export const isBusModelDefined = isModelDefined(BUS_MODEL);
export const isBusRouteModelDefined = isModelDefined(BUS_ROUTE_MODEL);
export const isBusCompanyModelDefined = isModelDefined(BUS_COMPANY_MODEL);

export const isDataBaseNotCreated =
  isUserModelDefined &&
  isTicketModelDefined &&
  isRoleModelDefined &&
  isPlaceModelDefined &&
  isBusModelDefined &&
  isBusRouteModelDefined &&
  isBusCompanyModelDefined;

export const createDataBase = () => {
  createUserTable();
  createTicketTable();
  createRoleTable();
  createPlaceTable();
  createBusTable();
  createBusRouteTable();
  createBusCompanyTable();
};
