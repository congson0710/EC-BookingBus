import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
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

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.use(cors());

app.use(bodyParser.json());
routes(app);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(process.env.PORT || 5000);
