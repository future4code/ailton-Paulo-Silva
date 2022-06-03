// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const num1 = Number(prompt("Altura: "));
  const num2 = Number(prompt("Largura: "));

  console.log(num1 * num2);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Ano atual: "));
  const anoNascimento = Number(prompt("Ano de nascimento: "));
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Nome: ");
  const idade = prompt("Idade: ");
  const email = prompt("Email: ");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  arrayCores = [];
  arrayCores[0] = prompt("Primeira cor favorita: ");
  arrayCores[1] = prompt("Segunda cor favorita: ");
  arrayCores[2] = prompt("Terceira cor favorita: ");

  console.log(arrayCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let array1 = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = array1;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Ano atual: "));
  const anoNascimento = Number(prompt("Ano de nascimento: "));
  const anoEmissaoCarteira = Number(
    prompt("Ano de emissão da carteira de identidade: ")
  );

  const idade = anoAtual - anoNascimento;
  tempoCarteira = anoAtual - anoEmissaoCarteira;

  console.log(
    (idade <= 20 && tempoCarteira >= 5) ||
      (idade <= 50 && tempoCarteira >= 10) ||
      (idade > 50 && tempoCarteira > 15)
  );
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );

  console.log(
    idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim"
  );
}
