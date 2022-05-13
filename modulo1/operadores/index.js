/*-----------------------Exercícios de interpretação de código-----------------------

-------Exercício 1-------

-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
  const bool1 = true
  const bool2 = false
  const bool3 = !bool2

  let resultado = bool1 && bool2
  console.log("a. ", resultado)

  resultado = bool1 && bool2 && bool3
  console.log("b. ", resultado)

  resultado = !resultado && (bool1 || bool2)
  console.log("c. ", resultado)

  console.log("d. ", typeof resultado)

-Respostas:
a. false

b. false

c. true

d. boolean

-------Exercício 2-------

-Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

  let primeiroNumero = prompt("Digite um numero!")
  let segundoNumero = prompt("Digite outro numero!")

  const soma = primeiroNumero + segundoNumero

  console.log(soma)

-Respostas:
Será impresso a concatenação do primeiroNumero com o segundoNumero. Para realizar operações, é necessário que a variável seja do tipo Number.

-------Exercício 3-------

-Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

-Respostas:
  let primeiroNumero = Number(prompt("Digite um numero!"))
  let segundoNumero = Number(prompt("Digite outro numero!"))

  const soma = primeiroNumero + segundoNumero

  console.log(soma)

*/

//-----------------------Exercícios de escrita de código-----------------------
/*-------Exercício 1-------

-Faça um programa que:
  a) Pergunte a idade do usuário

  b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

  c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

  d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
  */

const idadeUsuario = Number(prompt("Digite a sua idade: "));
const idadeAmigo = Number(prompt("Digite a idade do seu amigo(a): "));

console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  idadeUsuario > idadeAmigo
);
console.log(
  "A diferenca de idade entres você e o seu(a) amigo(a) é",
  idadeUsuario - idadeAmigo
);

/*-------Exercício 2-------
-Faça um programa que:

  a) Peça ao usuário que insira um número **par**

  b) Imprima na console **o resto da divisão** desse número por 2.

  c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

  d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

let numeroPar = Number(prompt("Digite um número par: "));
console.log(numeroPar % 2);

//O sinal de porcentagem % calcula o resto da divisão de um numero por outro. Para números pares, o resto da sua divisão por 2 sempre será 0.

//Caso um número ímpar for inserido, o resultado sempre será diferente de 0

/*-------Exercício 3-------

-Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

  a) A idade do usuário em meses

  b) A idade do usuário em dias

  c) A idade do usuário em horas
*/

const idade = Number(prompt("Digite a sua idade: "));

console.log("Sua idade em meses: ", idade * 12);
console.log("Sua idade em dias: ", idade * 365);
console.log("Sua idade em horas: ", idade * 8760);

/*-------Exercício 4-------

-Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

  O primeiro numero é maior que segundo? true
  O primeiro numero é igual ao segundo? false
  O primeiro numero é divisível pelo segundo? true
  O segundo numero é divisível pelo primeiro? true

  obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

console.log("O primeiro numero é maior que segundo? ", n1 > n2);
console.log("O primeiro numero igual ao segundo? ", n1 === n2);
console.log("O primeiro numero divisível pelo segundo? ", n1 % n2 == 0);
console.log("O segundo numero é divisível pelo primeiro? ", n2 % n1 == 0);

//-----------------------Desafios-----------------------

/*-------Exercício 1-------

-Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas

-Graus Fahrenheit(°F) para Kelvin(K)
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

-Graus Celsius(°C) para Graus Fahrenheit (°C)
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
  */

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

/*-------Exercício 2-------

-Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

  a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

  b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

*/
quilowattHora = 0.05;

console.log(
  `O valor a ser pago pela residência é de R$${
    280 * quilowattHora
  }. Valor com desconto de 15%: R$${280 - (15 / 100) * 280}`
);

/*-------Exercício 3-------

-Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

  a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:
  `20lb equivalem a X kg`

  b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma:
  `10.5oz equivalem a X kg`

  c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma:
  `100mi equivalem a X m`

  d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma:
  `50ft equivalem a X m`

  e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma:
  `103.56gal equivalem a X l`

  f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma:
  `450 xic equivalem a X l`

  g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

*/

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
