import Controller from './Controller';
import { Cliente, ClienteServices } from '../cases/VidaReal';

export class VidaRealController implements Controller {
  constructor(private readonly clienteServices: ClienteServices) {}

  public index(): void {
    this.clienteServices.adicionarCliente(
      new Cliente(
        1,
        'Joaquim',
        'joaquim@email.com',
        '000.000.000-00',
        new Date(),
      ),
    );
  }
}
