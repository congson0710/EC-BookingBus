import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';
import { sequelizeInstance } from './services/sequelize';
import RoleID from './services/sequelize/models/roleModel';
import './services/sequelize/associations';

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
