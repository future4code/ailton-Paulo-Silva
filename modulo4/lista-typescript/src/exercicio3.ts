enum Genero {
  acao = "ação",
  drama = "drama",
  comedia = "comédia",
  romance = "romance",
  terror = "terror",
  fantasia = "fantasia",
}

type filme = {
  nome: string;
  anoDeLancamento: number;
  genero: Genero;
  pontuacao?: number;
};

const retornaFilme = (
  nome: string,
  ano: number,
  genero: Genero,
  nota?: number
): filme => {
  if (nota) {
    return {
      nome: nome,
      anoDeLancamento: ano,
      genero: genero,
      pontuacao: nota,
    };
  } else {
    return {
      nome: nome,
      anoDeLancamento: ano,
      genero: genero,
    };
  }
};

console.log(
  retornaFilme(
    "The Lord of the Rings: The Fellowship of the Ring",
    2001,
    Genero.fantasia,
    92
  )
);
