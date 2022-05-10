/*-----------------------Exercícios de interpretação de código-----------------------

-------Exercício 1-------

a. false

b. false

c. true

d. boolean

-------Exercício 2-------

Será impresso a concatenação do primeiroNumero com o segundoNumero. Para realizar operações, é necessário que a variável seja do tipo Number.

-------Exercício 3-------

Solução:
  let primeiroNumero = Number(prompt("Digite um numero!"))
  let segundoNumero = Number(prompt("Digite outro numero!"))

*/

//-----------------------Exercícios de escrita de código-----------------------

//-------Exercício 1-------

let numeroPar = Number(prompt("Digite um número par: "));
console.log(numeroPar % 2);

//O sinal de porcentagem % calcula o resto da divisão de um numero por outro. Para números pares, o resto da sua divisão por 2 sempre será 0.

//Caso um número ímpar for inserido, o resultado sempre será diferente de 0

//-------Exercício 2-------

const idade = Number(prompt("Digite a sua idade: "));

console.log("Sua idade em meses: ", idade * 12);
console.log("Sua idade em dias: ", idade * 365);
console.log("Sua idade em horas: ", idade * 8760);

//-------Exercício 3-------

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

console.log("O primeiro numero é maior que segundo? ", n1 > n2);
console.log("O primeiro numero igual ao segundo? ", n1 === n2);
console.log("O primeiro numero divisível pelo segundo? ", n1 % n2 == 0);
console.log("O segundo numero é divisível pelo primeiro? ", n2 % n1 == 0);

//-----------------------Desafios-----------------------

//-------Exercício 1-------

F = 77;
C = 80;

console.log(`${F}°F em Kelvin(K) são ${(F - 32) * (5 / 9) + 273.15}K`);

console.log(`${C}°C Fahrenheit(°F) são ${C * (9 / 5) + 32}°F`);

C2 = Number(prompt("Digite o valor em graus Celsius para ser convertido: "));

CtoF = C2 * (9 / 5) + 32;
CtoK = (CtoF - 32) * (5 / 9) + 273.15;

console.log(
  `${C2}°C em Fahrenheit(°F) são ${CtoF}°F. ${C2}ºC em Kelvin(K) são ${CtoK}K`
);

//-------Exercício 2-------

quilowattHora = 0.05;

console.log(
  `O valor a ser pago pela residência é de R$${
    280 * quilowattHora
  }. Valor com desconto de 15%: R$${280 - (15 / 100) * 280}`
);

//-------Exercício 3-------

//a)
libra = 20;
console.log(`${libra}lb equivalem a ${libra / 2.205}kg`);

//b)

onca = 10.5;
console.log(`${onca}oz equivalem a ${onca / 35.274}kg`);

//c)
milha = 100;
console.log(`${milha}mi equivalem a ${milha * 1609}m`);

//d)

pes = 50;
console.log(`${pes}ft equivalem a ${pes / 3.281}m`);

//e)
galao = 103.56;
console.log(`${galao}gal equivalem a ${galao * 3.785}l`);

//e)
xicara = 450;
console.log(`${xicara}xic equivalem a ${xicara * 0.24}l`);
