import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT || 5000);
