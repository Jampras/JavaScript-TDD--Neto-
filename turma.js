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
    let somaMedias = 0;

    for (const aluno of this.alunos) {
      somaMedias += aluno.calcularMedia();
    }

    return somaMedias / this.alunos.length;
  }
}

export default Turma;