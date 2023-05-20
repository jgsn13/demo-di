import { inject, injectable } from 'inversify';
import { v4 as uuid } from 'uuid';
import { TYPES } from '../di';

@injectable()
export class OperacaoService {
  constructor(
    @inject(TYPES.LifeCycle.OperacaoTransient)
    public readonly transient: OperacaoTransient,
    @inject(TYPES.LifeCycle.OperacaoScoped)
    public readonly scoped: OperacaoScoped,
    @inject(TYPES.LifeCycle.OperacaoSingleton)
    public readonly singleton: OperacaoSingleton,
    @inject(TYPES.LifeCycle.OperacaoSingletonInstance)
    public readonly singletonInstance: OperacaoSingletonInstance,
  ) { }
}

@injectable()
export class OperacaoImpl
  implements
  OperacaoTransient,
  OperacaoScoped,
  OperacaoSingleton,
  OperacaoSingletonInstance {
  private _operacaoId: string;

  constructor(operacaoId: string);
  constructor();
  constructor(...args: any[]) {
    if (args.length === 1) {
      const [operacaoId] = args;
      this._operacaoId = operacaoId;
    } else {
      this._operacaoId = uuid();
    }
  }

  public get operacaoId(): string {
    return this._operacaoId;
  }
}

export interface Operacao {
  operacaoId: string;
}

export interface OperacaoTransient extends Operacao { }

export interface OperacaoScoped extends Operacao { }

export interface OperacaoSingleton extends Operacao { }

export interface OperacaoSingletonInstance extends Operacao { }
