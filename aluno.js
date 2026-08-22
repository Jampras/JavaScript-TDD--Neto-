class Aluno {
  constructor(nome, notas, turma) {
    this.nome = nome;
    this.notas = notas;
    this.turma = turma;
  }

  calcularMedia() {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);

    return soma / this.notas.length;
  }

  obterSituacao() {
    if (this.calcularMedia() >= 7.0) {
      return "Aprovado";
    }

    return "Reprovado";
  }
}

export default Aluno;
