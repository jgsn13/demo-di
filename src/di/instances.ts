import { container } from './container';
import { TYPES } from './types';
import { ClienteRepository, ClienteServices } from '../cases/VidaReal';
import {
  OperacaoTransient,
  OperacaoScoped,
  OperacaoSingleton,
  OperacaoSingletonInstance,
  OperacaoService,
} from '../cases/LifeCycle';

const instances = {
  VidaReal: {
    getClienteRepository: () =>
      container.get<ClienteRepository>(TYPES.VidaReal.ClienteRepository),
    getClienteServices: () =>
      container.get<ClienteServices>(TYPES.VidaReal.ClienteServices),
  },
  LifeCycle: {
    getOperacaoTransient: () =>
      container.get<OperacaoTransient>(TYPES.LifeCycle.OperacaoTransient),
    getOperacaoScoped: () =>
      container.get<OperacaoScoped>(TYPES.LifeCycle.OperacaoScoped),
    getOperacaoSingleton: () =>
      container.get<OperacaoSingleton>(TYPES.LifeCycle.OperacaoSingleton),
    getOperacaoSingletonInstance: () =>
      container.get<OperacaoSingletonInstance>(
        TYPES.LifeCycle.OperacaoSingletonInstance,
      ),
    getOperacaoService: () =>
      container.get<OperacaoService>(TYPES.LifeCycle.OperacaoService),
  },
};

export default instances;
