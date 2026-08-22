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

  test('cadastrar aluno', () => {
    const aluno = sistema.cadastrarAluno('Carlos Silva', [8, 9, 7], 'Mouratech Dados');
    expect(aluno.nome).toBe('Carlos Silva');
    expect(aluno.turma).toBe('Mouratech Dados');
  });

  test('listar alunos', () => {
    const resultado = sistema.listarAlunos();
    expect(resultado.length).toBe(11);
  });

  test('analisar turma', () => {
    const resultado = sistema.analisarTurma('Mouratech Dados');
    expect(resultado.length).toBe(4);
  });

  test('gerar relatorio analitico', () => {
    const relatorio = sistema.gerarRelatorioAnalitico();
    expect(relatorio.maiorAluno.nome).toBe('Ruan Carvalho');
    expect(relatorio.menorAluno.nome).toBe('Vitoria Tibum');
    expect(relatorio.turmas.length).toBe(3);
  });
});
