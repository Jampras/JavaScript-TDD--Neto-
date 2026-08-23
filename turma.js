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
}

export default Turma;