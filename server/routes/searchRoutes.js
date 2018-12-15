import BusRoute from '../services/sequelize/models/busRouteModel';
import Ticket from '../services/sequelize/models/ticketModel';

const searchRoutes = app => {
  app.get('/api/search-ticket', async (req, res) => {
    const { startPlace, endPlace, startDay } = req.query;
    console.log(req.query);
    try {
      const tickets = await Ticket.findAll({
        include: [
          {
            model: BusRoute,
            where: { startPlaceID: startPlace, endPlaceID: endPlace }
          }
        ]
      });

      res.status(200).send(tickets);
    } catch (error) {
      console.error(error);
    }
  });
};

export default searchRoutes;
