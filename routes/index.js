import userRoute from './userRoutes';
import placeRoutes from './placeRoutes';
import ticketRoutes from './ticketRoutes';
import searchRoutes from './searchRoutes';
import bookingRoutes from './bookingRoutes';
import adminRoutes from './adminRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
  ticketRoutes(app);
  searchRoutes(app);
  bookingRoutes(app);
  adminRoutes(app);
};

export default routes;
