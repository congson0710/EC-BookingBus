import uniqBy from 'lodash/fp/uniqBy';

import BusRoute from '../services/sequelize/models/busRouteModel';
import Ticket from '../services/sequelize/models/ticketModel';
import Bus from '../services/sequelize/models/busModel';
import BusCompany from '../services/sequelize/models/busCompanyModel';
import Place from '../services/sequelize/models/placeModel';

const searchRoutes = app => {
  app.get('/api/search-ticket', async (req, res) => {
    const { startPlace, endPlace, startDay } = req.query;

    try {
      const tickets = await Ticket.findAll({
        include: [
          {
            model: BusRoute,
            where: { startPlaceID: startPlace, endPlaceID: endPlace },
            include: [
              {
                model: Bus,
                include: [
                  {
                    model: BusCompany
                  }
                ]
              },
              {
                model: Place,
                as: 'startPlace'
              },
              {
                model: Place,
                as: 'endPlace'
              }
            ]
          }
        ]
      });

      const newListTickets = uniqBy('busRouteID')(tickets);

      res.status(200).send(newListTickets);
    } catch (error) {
      console.error(error);
    }
  });
};

export default searchRoutes;
