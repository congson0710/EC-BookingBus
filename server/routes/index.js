import userRoute from './userRoutes';
import placeRoutes from './placeRoutes';
import searchRoutes from './searchRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
  searchRoutes(app);
};

export default routes;
