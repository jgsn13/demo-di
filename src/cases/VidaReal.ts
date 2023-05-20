import { inject, injectable } from 'inversify';
import { TYPES } from '../di';

export class Cliente {
  constructor(
    public clienteId: number,
    public nome: string,
    public email: string,
    public cpf: string,
    public dataCadastro: Date,
  ) {}
}

export interface ClienteRepository {
  adicionarCliente(cliente: Cliente): void;
}

@injectable()
export class ClienteRepositoryImpl implements ClienteRepository {
  public adicionarCliente(cliente: Cliente): void {
    console.log('faz algo');
  }
}

export interface ClienteServices {
  adicionarCliente(cliente: Cliente): void;
}

@injectable()
export class ClienteServicesImpl implements ClienteServices {
  constructor(
    @inject(TYPES.VidaReal.ClienteRepository)
    private readonly clienteRepository: ClienteRepository,
  ) {}

  public adicionarCliente(cliente: Cliente): void {
    this.clienteRepository.adicionarCliente(cliente);
  }
}
