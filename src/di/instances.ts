import { container } from './container';
import { TYPES } from './types';
import { ClienteRepository, ClienteServices } from '../cases/VidaReal';

const instances = {
  clienteRepository: container.get<ClienteRepository>(TYPES.ClienteRepository),
  clienteServices: container.get<ClienteServices>(TYPES.ClienteServices),
};

export default instances;
