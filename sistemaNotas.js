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
    return this.turmas.find((turma) => turma.nome === nomeTurma);
  }

  cadastrarAluno(nome, notas, nomeTurma) {
    const turma = this.buscarTurma(nomeTurma);
    const aluno = new Aluno(nome, notas, nomeTurma);

    turma.adicionarAluno(aluno);
    return aluno;
  }

  listarAlunos() {
    return this.turmas.flatMap((turma) => turma.alunos);
  }

  analisarTurma(nomeTurma) {
    return this.buscarTurma(nomeTurma)?.alunos ?? [];
  }

  gerarRelatorioAnalitico() {
    const alunos = this.listarAlunos();

    const maiorAluno = alunos.reduce((maior, atual) =>
      atual.calcularMedia() > maior.calcularMedia() ? atual : maior, alunos[0]
    );

    const menorAluno = alunos.reduce((menor, atual) =>
      atual.calcularMedia() < menor.calcularMedia() ? atual : menor, alunos[0]
    );

    return {
      maiorAluno,
      menorAluno,
      turmas: this.turmas.map((turma) => ({
        turma,
        estatisticas: turma.obterEstatisticas(),
      })),
    };
  }
}

export default SistemaNotas;