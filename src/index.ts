import instances from './di/instances';
// import { VidaRealController } from './controllers/VidaRealController';
import { LifeCycleController } from './controllers/LifeCycleController';

// VidaReal
// const clienteServices = instances.VidaReal.getClienteServices();
// const controller = new VidaRealController(clienteServices);
// controller.index();

// LifeCycle
const operacaoService = instances.LifeCycle.getOperacaoService();
const operacaoService2 = instances.LifeCycle.getOperacaoService();
const controller = new LifeCycleController(operacaoService, operacaoService2);
console.log(controller.index());
