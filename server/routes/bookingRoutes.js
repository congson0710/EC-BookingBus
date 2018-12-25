import isNil from 'lodash/fp/isNil';

import Ticket from '../services/sequelize/models/ticketModel';
import Booking from '../services/sequelize/models/bookingModel';

const bookingRoutes = app => {
  app.post('/api/:userID/book-ticket/:ticketID', async (req, res) => {
    try {
      console.log('params', req.params);
      const { ticketID, userID } = req.params;
      const result = await Ticket.update(
        { status: 'SOLD' },
        { where: { ticketID } }
      );

      if (!isNil(result)) {
        Booking.create({
          userID,
          ticketID
        });
      }

      res.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });
};

export default bookingRoutes;
