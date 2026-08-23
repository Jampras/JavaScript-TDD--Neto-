class Turma {
  constructor(nome) {
    this.nome = nome;
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    if (!aluno) {
      throw new Error("Aluno inválido");
    }
    this.alunos.push(aluno);
    return aluno;
  }

  calcularMediaGeral() {
    if (this.alunos.length === 0) return 0;

    const somaMedias = this.alunos.reduce((soma, aluno) => soma + aluno.calcularMedia(), 0);
    return somaMedias / this.alunos.length;
  }

  obterEstatisticas() {
    let aprovados = 0;
    let reprovados = 0;

    for (const aluno of this.alunos) {
      if (aluno.obterSituacao() === "Aprovado") {
        aprovados++;
      } else {
        reprovados++;
      }
    }

    return {
      mediaGeral: this.calcularMediaGeral(),
      aprovados,
      reprovados,
    };
  }
}

export default Turma;