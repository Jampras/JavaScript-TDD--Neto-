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
    for (const turma of this.turmas) {
      if (turma.nome === nomeTurma) return turma;
    }
  }

  cadastrarAluno(nome, notas, nomeTurma) {
    const turma = this.buscarTurma(nomeTurma);
    const aluno = new Aluno(nome, notas, nomeTurma);
    turma.adicionarAluno(aluno);
    return aluno;
  }

  listarAlunos() {
    const alunos = [];
    for (let i = 0; i < this.turmas.length; i++) {
      for (let j = 0; j < this.turmas[i].alunos.length; j++) {
        alunos.push(this.turmas[i].alunos[j]);
      }
    }
    return alunos;
  }

  analisarTurma(nomeTurma) {
    const turma = this.buscarTurma(nomeTurma);
    return turma.alunos;
  }

  gerarRelatorioAnalitico() {
    const alunos = this.listarAlunos();
    let maiorAluno = alunos[0];
    let menorAluno = alunos[0];

    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].calcularMedia() > maiorAluno.calcularMedia()) {
        maiorAluno = alunos[i];
      }
      if (alunos[i].calcularMedia() < menorAluno.calcularMedia()) {
        menorAluno = alunos[i];
      }
    }

    const relatorioTurmas = [];
    for (const turma of this.turmas) {
      relatorioTurmas.push({
        turma: turma,
        estatisticas: turma.obterEstatisticas(),
      });
    }

    return {
      maiorAluno,
      menorAluno,
      turmas: relatorioTurmas,
    };
  }
}

export default SistemaNotas;