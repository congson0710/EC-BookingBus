import express from 'express';
import bodyParser from 'body-parser';
import { sequelizeInstance } from './services/sequelize';

const app = express();

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());

require('./routes/userRoutes')(app);

app.listen(process.env.PORT || 5000);
