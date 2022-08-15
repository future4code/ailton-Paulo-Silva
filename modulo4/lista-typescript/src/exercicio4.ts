enum Setores {
  marketing = "marketing",
  vendas = "vendas",
  financeiro = "financeiro",
}

type Empregados = {
  nome: string;
  salario: number;
  setor: Setores;
  presencial: boolean;
};

const filtroEmpregados = (listaEmpregados: Empregados[]): Empregados[] => {
  const listaFiltrada: Empregados[] = listaEmpregados.filter((e) => {
    return e.setor == Setores.marketing && e.presencial;
  });
  return listaFiltrada;
};

const listaEmpregados: Empregados[] = [
  {
    nome: "Ana",
    salario: 3100,
    setor: Setores.financeiro,
    presencial: true,
  },
  {
    nome: "João",
    salario: 2900,
    setor: Setores.vendas,
    presencial: false,
  },
  {
    nome: "Maria",
    salario: 3500,
    setor: Setores.marketing,
    presencial: true,
  },
];

console.log(filtroEmpregados(listaEmpregados));
