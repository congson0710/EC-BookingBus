import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';

import { sequelizeInstance } from './services/sequelize';
// import { isDataBaseNotCreated, createDataBase } from './utils';

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(cors());

app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT || 5000);
