import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

require('./routes/userRoutes')(app);

app.listen(process.env.PORT || 5000);
