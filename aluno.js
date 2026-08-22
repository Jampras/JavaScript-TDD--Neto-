class Aluno {
  constructor(nome, notas, turma) {
    this.nome = nome;
    this.notas = notas;
    this.turma = turma;
  }

  calcularMedia() {
    return 0;
  }

  obterSituacao() {
    if (this.calcularMedia() >= 7.0) {
      return "Aprovado";
    }

    return "Reprovado";
  }
}

export default Aluno;
