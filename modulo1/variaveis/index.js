/* ----------------Exercícios de interpretação de código----------------

-------Exercício 1-------

Resultado previsto:
  10
  10 5

-------Exercício 2-------

Resultado previsto:
  10 10 10

-------Exercício 3-------

Alterações:
let horasDiarias = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasDiarias} por hora`) */

//----------------Exercícios de escrita de código-----------------------

//-------Exercício 1-------

let nome;
let idade;

console.log(typeof nome, typeof idade);

//variáveis do tipo undefined, pois não tiveram valores atribuídos a si

nome = prompt("Digite o seu nome: ");
idade = prompt("Digite sua idade: ");

console.log(typeof nome, typeof idade);

//variável idade é tipo string, uma vez que o prompt sempre retorna uma string. O uso do Number() seria uma alternativa.

console.log(`Olá ${nome}, você tem ${idade} anos.`);

//-------Exercício 2-------

let pergunta1 = prompt("Você está usando roupa preta hoje? ");
let pergunta2 = prompt("Você está usando tênis hoje? ");
let pergunta3 = prompt("Você está na sua casa? ");

console.log(`Você está usando roupa preta hoje? - ${pergunta1}`);
console.log(`Você está usando tênis hoje? - ${pergunta2}`);
console.log(`Você está na sua casa? - ${pergunta3}`);

//-------Exercício 3-------

let a = 10;
let b = 25;

let c = 10;

a = b;
b = c;

console.log(`O novo valor de a é: ${a}`);
console.log(`O novo valor de b é: ${b}`);

//---------------------------Desafio-------------------------------

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

console.log(
  "O primeiro número somado ao segundo número resulta em:",
  num1 + num2
);
console.log(
  "O primeiro número multiplicado pelo segundo número resulta em:",
  num1 * num2
);
