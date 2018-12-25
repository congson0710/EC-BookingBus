import isNil from 'lodash/fp/isNil';

import Ticket from '../services/sequelize/models/ticketModel';
import Booking from '../services/sequelize/models/bookingModel';

const bookingRoutes = app => {
  app.post('/api/book-ticket/', async (req, res) => {
    try {
      console.log('params', req.body);
      const {ticketID, userID} = req.body;
      const result = await Ticket.update({status: 'SOLD'}, {where: {ticketID}});

      if (!isNil(result)) {
        const createBooking = await Booking.create({
          userID,
          ticketID,
        });
        res.status(200).send('book ticket success!');
      }
    } catch (error) {
      console.error(error);
    }
  });
};

export default bookingRoutes;
