class Turma {
  constructor(nome) {
    this.nome = nome;
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
    return aluno;
  }
}

export default Turma;