import Ticket from './models/ticketModel';
import BusRoute from './models/busRouteModel';
import Bus from './models/busModel';
import BusCompany from './models/busCompanyModel';
import Place from './models/placeModel';

Ticket.belongsTo(BusRoute, { foreignKey: 'busRouteID', onDelete: 'CASCADE' });
BusRoute.belongsTo(Bus, { foreignKey: 'busID', onDelete: 'CASCADE' });
Bus.belongsTo(BusCompany, { foreignKey: 'busCompanyID', onDelete: 'CASCADE' });
BusRoute.belongsTo(Place, {
  as: 'startPlace',
  foreignKey: 'startPlaceID',
  onDelete: 'CASCADE'
});
BusRoute.belongsTo(Place, {
  as: 'endPlace',
  foreignKey: 'endPlaceID',
  onDelete: 'CASCADE'
});
