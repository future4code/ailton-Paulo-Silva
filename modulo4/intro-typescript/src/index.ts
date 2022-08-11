//exercício 1
function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

console.log(checaTriangulo(3, 4, 5));

//exercício 2
function imprimeTresCoresFavorites(
  cor1: string,
  cor2: string,
  cor3: string
): any {
  console.log([cor1, cor2, cor3]);
}

imprimeTresCoresFavorites("Azul", "Vermelho", "Amarelo");

//exercício 3
function checaAnoBissexto(ano: number) {
  const cond1 = ano % 400 === 0;
  const cond2 = ano % 4 === 0 && ano % 100 !== 0;
  console.log(cond1 || cond2);
}

checaAnoBissexto(2012);

//exercício 4
function comparaDoisNumeros(num1: number, num2: number) {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  console.log(diferenca);
}

comparaDoisNumeros(10, 5);

//exercício 5
function checaRenovacaoRG(
  anoAtual: number,
  anoNascimento: number,
  anoEmissao: number
) {
  let idade = anoAtual - anoNascimento;
  let tempoCarteira = anoAtual - anoEmissao;

  if (idade <= 20) {
    return tempoCarteira >= 5
      ? "passou dos 5 anos precisa renovar"
      : "ainda não passou os 5 anos";
  } else if (idade >= 20 || idade <= 50) {
    return tempoCarteira >= 10
      ? "passou dos 10 anos precisa renovar"
      : "ainda não passou os 10 anos";
  } else if (idade > 50) {
    return tempoCarteira >= 15
      ? "passou dos 15 anos precisa renovar"
      : "ainda não passou os 15 anos";
  } else {
    return "error";
  }
}

console.log(checaRenovacaoRG(2022, 1989, 2011));

//exercício 6
function operacoes(num1: number, num2: number) {
  console.log(`
  Soma: ${num1 + num2}
  Subtração: ${num1 - num2}
  Multiplicação: ${num1 * num2}
  Maior número: ${num1 > num2 ? num1 : num2}
  `);
}

operacoes(25, 5);
