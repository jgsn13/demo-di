import { container, TYPES } from './di';
import { VidaRealController } from './controllers/VidaRealController';
import { ClienteServices } from './cases/VidaReal';

const clienteServices = container.get<ClienteServices>(TYPES.ClienteServices);

const controller = new VidaRealController(clienteServices);

controller.index();
