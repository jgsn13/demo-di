import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '.';
import {
  ClienteRepository,
  ClienteServices,
  ClienteRepositoryImpl,
  ClienteServicesImpl,
} from '../cases/VidaReal';

const container = new Container();

container
  .bind<ClienteRepository>(TYPES.ClienteRepository)
  .to(ClienteRepositoryImpl);

container.bind<ClienteServices>(TYPES.ClienteServices).to(ClienteServicesImpl);

export { container };
