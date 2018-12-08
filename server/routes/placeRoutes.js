import { placeModel } from '../services/sequelize/models/placeModel';

const placeRoutes = app => {
  app.get('/api/list-place', async (_, res) => {
    try {
      const result = await placeModel.findAll();
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });
};

export default placeRoutes;