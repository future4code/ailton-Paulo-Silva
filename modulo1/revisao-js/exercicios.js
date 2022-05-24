// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const newArray = array.filter((item) => {
    return !(item % 2);
  });
  return newArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const newArray = array
    .filter((item) => {
      return !(item % 2);
    })
    .map((item) => {
      return Math.pow(item, 2);
    });
  return newArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1;
  let menorNumero = num2;

  if (num1 < num2) {
    maiorNumero = num2;
    menorNumero = num1;
  }

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = [];
  for (let i = 0; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  segundoMenor = array[1];
  array.reverse();
  segundoMaior = array[1];

  return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((item) => {
    return item.idade > 14 && item.idade < 60 && item.altura >= 1.5;
  });
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((item) => {
    return !(item.idade > 14 && item.idade < 60 && item.altura >= 1.5);
  });
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const contasSaltoAtualizado = contas.map((item) => {
    let sum = item.compras.reduce(function (a, b) {
      return a + b;
    }, 0);

    item.saldoTotal -= sum;
    item.compras = [];
    return item;
  });
  return contasSaltoAtualizado;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
