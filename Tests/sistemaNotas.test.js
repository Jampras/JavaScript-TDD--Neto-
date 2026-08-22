import SistemaNotas from '../sistemaNotas.js';

describe('SistemaNotas', () => {
  let sistema;

  beforeEach(() => {
    sistema = new SistemaNotas();
  });

  test('buscar turma', () => {
    const resultado = sistema.buscarTurma('Mouratech Dados');
    expect(resultado.nome).toBe('Mouratech Dados');
  });
});
