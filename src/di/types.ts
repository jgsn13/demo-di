const TYPES = {
  VidaReal: {
    ClienteRepository: Symbol.for('ClienteRepository'),
    ClienteServices: Symbol.for('ClienteServices'),
  },
  LifeCycle: {
    OperacaoTransient: Symbol.for('OperacaoTransient'),
    OperacaoScoped: Symbol.for('OperacaoScoped'),
    OperacaoSingleton: Symbol.for('OperacaoSingleton'),
    OperacaoSingletonInstance: Symbol.for('OperacaoSingletonInstance'),
    OperacaoService: Symbol.for('OperacaoService'),
  },
};

export { TYPES };
