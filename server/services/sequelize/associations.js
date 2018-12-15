import Ticket from './models/ticketModel';
import BusRoute from './models/busRouteModel';

Ticket.belongsTo(BusRoute, { foreignKey: 'busRouteID' });
