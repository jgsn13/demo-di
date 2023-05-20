import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '.';
import {
  ClienteRepository,
  ClienteServices,
  ClienteRepositoryImpl,
  ClienteServicesImpl,
} from '../cases/VidaReal';

import {
  OperacaoTransient,
  OperacaoScoped,
  OperacaoSingleton,
  OperacaoSingletonInstance,
  OperacaoImpl,
  OperacaoService,
} from '../cases/LifeCycle';

const container = new Container();

// VidaReal
container
  .bind<ClienteRepository>(TYPES.VidaReal.ClienteRepository)
  .to(ClienteRepositoryImpl);
container
  .bind<ClienteServices>(TYPES.VidaReal.ClienteServices)
  .to(ClienteServicesImpl);

// LifeCicle
container
  .bind<OperacaoTransient>(TYPES.LifeCycle.OperacaoTransient)
  .to(OperacaoImpl)
  .inTransientScope(); // transient (default)
container
  .bind<OperacaoScoped>(TYPES.LifeCycle.OperacaoScoped)
  .to(OperacaoImpl)
  .inRequestScope(); // scoped
container
  .bind<OperacaoSingleton>(TYPES.LifeCycle.OperacaoSingleton)
  .to(OperacaoImpl)
  .inSingletonScope(); // singleton
container
  .bind<OperacaoSingletonInstance>(TYPES.LifeCycle.OperacaoSingletonInstance)
  .toDynamicValue(
    () => new OperacaoImpl('00000000-0000-0000-0000-000000000000'),
  )
  .inSingletonScope(); // singleton (instance)
container
  .bind<OperacaoService>(TYPES.LifeCycle.OperacaoService)
  .to(OperacaoService)
  .inTransientScope();

export { container };
