const alunos = [
  {
    id: 1,
    nome: "Tony Stark",
    turma: "Mouratech Dados",
  },
  {
    id: 2,
    nome: "Peter Parker",
    turma: "Mouratech Fullstack",
  },
  {
    id: 3,
    nome: "Bruce Wayne",
    turma: "Mouratech Automação",
  },
];

function buscarAluno(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aluno = alunos.find((item) => item.id === Number(id));

      if (aluno) {
        resolve(aluno);
        return;
      }

      reject(new Error(`Aluno com ID ${id} não encontrado.`));
    }, 1000);
  });
}

export { buscarAluno };
