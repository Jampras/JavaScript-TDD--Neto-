import Aluno from "./aluno.js";
import Turma from "./turma.js";

class SistemaNotas {
  constructor() {
    this.turmas = [
      new Turma("Mouratech Dados"),
      new Turma("Mouratech Fullstack"),
      new Turma("Mouratech Automação"),
    ];

    this.carregarAlunosIniciais();
  }

  carregarAlunosIniciais() {
    const alunosIniciais = [
      ["Maria giganta", [8.5, 7, 9.2], "Mouratech Dados"],
      ["Joao Louco", [6, 5.5, 7.4], "Mouratech Dados"],
      ["Ruan Filho", [9.8, 9.1, 10], "Mouratech Dados"],
      ["Xaxavier Reis", [7, 7, 6.9], "Mouratech Dados"],
      ["Ruan Carvalho", [10, 10, 10], "Mouratech Fullstack"],
      ["José Ernandes", [10, 7, 9], "Mouratech Fullstack"],
      ["Rayssa Vitoria", [7.2, 6.8, 7.5], "Mouratech Fullstack"],
      ["Mauricio Chagas", [8.9, 9.4, 8.2], "Mouratech Automação"],
      ["JotaQuest", [5.8, 6.5, 6], "Mouratech Automação"],
      ["Pedro Robo", [7.7, 7.1, 8.3], "Mouratech Automação"],
      ["Vitoria Tibum", [3.2, 4.8, 5.5], "Mouratech Automação"],
    ];

    for (const [nome, notas, turma] of alunosIniciais) {
      this.cadastrarAluno(nome, notas, turma);
    }
  }

  buscarTurma(nomeTurma) {
    return null;
  }

  cadastrarAluno(nome, notas, nomeTurma) {
    return null;
  }

  listarAlunos() {
    return [];
  }

  analisarTurma(nomeTurma) {
    return [];
  }

  gerarRelatorioAnalitico() {
    return null;
  }
}

export default SistemaNotas;
