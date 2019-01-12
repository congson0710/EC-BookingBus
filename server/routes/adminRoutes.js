import BusModel from '../services/sequelize/models/busModel';
const adminRoutes = app => {
  app.get('/api/get-buses/', async (req, res) => {
    try {
      const result = await BusModel.findAll({
        where: {
          busCompanyID: 1
        },
        raw: true
      });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(401).send(error.message);
    }
  });
};

export default adminRoutes;
