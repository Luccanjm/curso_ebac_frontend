const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 6.5 },
  { nome: "Daniel", nota: 4 },
  { nome: "Eduarda", nota: 9 }
];

function filtrarAprovados(listaAlunos) {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);