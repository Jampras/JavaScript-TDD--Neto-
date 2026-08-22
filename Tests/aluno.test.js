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

});
