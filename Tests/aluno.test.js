import Aluno from '../aluno.js';

describe('Aluno', () => {

  let aluno;

  beforeEach(() => {
    aluno = new Aluno('João', [8, 7, 6], 'Mouratech Fullstack');
  });

  test('calcular media', () => {
    const resultado = aluno.calcularMedia();
    expect(resultado).toBe(7);
  });

  test('aluno aprovado', () => {
  const resultado = aluno.obterSituacao();
  expect(resultado).toBe('Aprovado');
  });

  test('aluno reprovado', () => {
  aluno = new Aluno('Pedro', [5, 6, 4], 'Mouratech Fullstack');
  const resultado = aluno.obterSituacao();
  expect(resultado).toBe('Reprovado');
  });

});
