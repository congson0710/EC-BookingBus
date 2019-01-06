import isNil from 'lodash/fp/isNil';

import Ticket from '../services/sequelize/models/ticketModel';
import Booking from '../services/sequelize/models/bookingModel';

const bookingRoutes = app => {
  app.post('/api/book-ticket/', async (req, res) => {
    try {
      const {ticketID, userID} = req.body;
      const result = await Ticket.update({status: 'SOLD'}, {where: {ticketID}});

      if (!isNil(result)) {
        const createBooking = await Booking.create({
          userID,
          ticketID,
          paid: false,
        });
        res.status(200).send(createBooking);
      }
    } catch (error) {
      console.error(error);
    }
  });

  app.post('/api/update-payment-status', async (req, res) => {
    try {
      const {userID, ticketID} = req.body;
      const result = await Booking.update(
        {paid: true},
        {where: {userID, ticketID}},
      );
      if (!isNil(result)) {
        res.status(200).send(result);
      }
    } catch (error) {
      console.error(error);
    }
  });
};

export default bookingRoutes;
