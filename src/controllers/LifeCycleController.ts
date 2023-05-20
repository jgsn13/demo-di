import Controller from './Controller';
import { OperacaoService } from '../cases/LifeCycle';

export class LifeCycleController implements Controller {
  constructor(
    public operacaoService: OperacaoService,
    public operacaoService2: OperacaoService,
  ) { }

  public index(): string {
    return 'Primeira instância: \n' +
      this.operacaoService.transient.operacaoId + '\n' +
      this.operacaoService.scoped.operacaoId + '\n' +
      this.operacaoService.singleton.operacaoId + '\n' +
      this.operacaoService.singletonInstance.operacaoId + '\n' + '\n' +
      'Segunda instância: \n' +
      this.operacaoService2.transient.operacaoId + '\n' +
      this.operacaoService2.scoped.operacaoId + '\n' +
      this.operacaoService2.singleton.operacaoId + '\n' +
      this.operacaoService2.singletonInstance.operacaoId
      ;
  }
}
