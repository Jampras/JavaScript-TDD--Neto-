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
    return this.calcularMedia() >= 7.0 ? "Aprovado" : "Reprovado";
  }
}

export default Aluno;
