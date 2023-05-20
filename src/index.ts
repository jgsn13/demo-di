import instances from './di/instances';
import { VidaRealController } from './controllers/VidaRealController';

const clienteServices = instances.clienteServices;

const controller = new VidaRealController(clienteServices);

controller.index();
