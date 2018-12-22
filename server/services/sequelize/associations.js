import Ticket from './models/ticketModel';
import BusRoute from './models/busRouteModel';
import Bus from './models/busModel';
import BusCompany from './models/busCompanyModel';
import Place from './models/placeModel';

Ticket.belongsTo(BusRoute, { foreignKey: 'busRouteID' });
BusRoute.belongsTo(Bus, { foreignKey: 'busID' });
Bus.belongsTo(BusCompany, { foreignKey: 'busCompanyID' });
BusRoute.belongsTo(Place, { as: 'startPlace', foreignKey: 'startPlaceID' });
BusRoute.belongsTo(Place, { as: 'endPlace', foreignKey: 'endPlaceID' });
