import Turma from "../turma.js";

describe("Classe Turma", () => {
  test("deve adicionar um aluno na turma", () => {
    const turma = new Turma("Mouratech Fullstack");
    const alunoMock = { nome: "Ana", turma: "Mouratech Fullstack" };

    turma.adicionarAluno(alunoMock);

    expect(turma.alunos.length).toBe(1);
    expect(turma.alunos).toContain(alunoMock);
  });

  test("deve calcular a média geral da turma corretamente", () => {
    const turma = new Turma("Mouratech Fullstack");
    turma.adicionarAluno({ calcularMedia: () => 8, obterSituacao: () => "Aprovado" });
    turma.adicionarAluno({ calcularMedia: () => 6, obterSituacao: () => "Reprovado" });

    expect(turma.calcularMediaGeral()).toBe(7);
  });

  test("deve retornar as estatísticas corretas da turma", () => {
    const turma = new Turma("Mouratech Fullstack");
    turma.adicionarAluno({ calcularMedia: () => 8, obterSituacao: () => "Aprovado" });
    turma.adicionarAluno({ calcularMedia: () => 4, obterSituacao: () => "Reprovado" });

    const estatisticas = turma.obterEstatisticas();

    expect(estatisticas).toEqual({
      mediaGeral: 6,
      aprovados: 1,
      reprovados: 1,
    });
  });
});