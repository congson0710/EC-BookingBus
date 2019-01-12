import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';

import PlaceModel from '../services/sequelize/models/placeModel';

const placeRoutes = app => {
  app.get('/api/list-place', async (req, res) => {
    try {
      const result = await PlaceModel.findAll();
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });
  app.post('/api/list-place', async (req, res) => {
    const { filteredListPlace } = req.body;
    try {
      const result = await PlaceModel.findAll().map(place => place.dataValues);
      const newListPlace = result.filter(
        place => filteredListPlace.placeID !== place.placeID.toString()
      );
      res.status(200).send(newListPlace);
    } catch (error) {
      console.error(error);
    }
  });
};

export default placeRoutes;
