import userRoute from './userRoutes';
import placeRoutes from './placeRoutes';
import ticketRoutes from './ticketRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
  ticketRoutes(app);
};

export default routes;
