import Sequelize from 'sequelize';

export const sequelizeInstance = new Sequelize(
  'EcBooking',
  'root',
  '081196Son',
  {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    },
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);
