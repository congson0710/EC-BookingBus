import userRoute from './userRoutes';
import placeRoutes from './placeRoutes';
import ticketRoutes from './ticketRoutes';
import searchRoutes from './searchRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
  ticketRoutes(app);
  searchRoutes(app);
};

export default routes;
