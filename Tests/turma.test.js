import Turma from "../turma.js";

describe("Classe Turma", () => {
  test("deve adicionar um aluno na turma", () => {
    const turma = new Turma("Mouratech Fullstack");
    const alunoMock = { nome: "Ana", turma: "Mouratech Fullstack" };

    turma.adicionarAluno(alunoMock);

    expect(turma.alunos.length).toBe(1);
    expect(turma.alunos).toContain(alunoMock);
  });
});