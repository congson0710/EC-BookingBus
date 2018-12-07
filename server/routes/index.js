import userRoute from './userRoutes';
import { placeRoutes } from './placeRoutes';

const routes = app => {
  userRoute(app);
  placeRoutes(app);
};

export default routes;
