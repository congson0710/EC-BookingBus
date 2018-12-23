import userRoute from './userRoutes';
import placeRoutes from './placeRoutes';
import ticketRoutes from './ticketRoutes';
import searchRoutes from './searchRoutes';
import bookingRoutes from './bookingRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
  ticketRoutes(app);
  searchRoutes(app);
  bookingRoutes(app);
};

export default routes;
