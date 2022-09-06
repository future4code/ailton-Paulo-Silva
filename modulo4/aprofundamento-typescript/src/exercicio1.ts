//a
const minhaString: string = "minhaString";

console.log(minhaString);

//b
const meuNumero: number = 40;

const meuNumeroOuTexto: number | string = 40;

//c
let objeto: { nome: string; idade: number; corFavorita: string } = {
  nome: "Ana",
  idade: 37,
  corFavorita: "Vermelho",
};

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};
