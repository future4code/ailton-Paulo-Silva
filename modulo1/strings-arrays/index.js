/*-----------------------Exercícios de interpretação de código-----------------------

-------Exercício 1-------

Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
  let array
  console.log('a. ', array)

  array = null
  console.log('b. ', array)

  array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  console.log('c. ', array.length)

  let i = 0
  console.log('d. ', array[i])

  array[i+1] = 19
  console.log('e. ', array)

  const valor = array[i+6]
  console.log('f. ', valor)

-Respostas:
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

-------Exercício 2-------

Leia o código abaixo com atenção
  const frase = prompt("Digite uma frase")

  console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

  -Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

-Resposta:
'SUBI NUM ÔNIBUS EM MIRROCOS' 28

*/

//-----------------------Exercícios de escrita de código-----------------------

/*-------Exercício 1-------
Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!       */

let nomeUsuario = prompt("Qual é o seu nome? ");
let emailUsuario = prompt("Qual é o seu email? ");

console.log(
  `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`
);

/*-------Exercício 2-------
Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima no console o array completo

    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
*/

let comidasPreferidas = ["Pizza", "Bolo", "Lasanha", "Chocolate", "Torta"];

console.log(`Essas essas são minhas comidas preferias:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}
`);

let comidaPreferidaUsuario = prompt("Qual sua comida preferia? ");

comidasPreferidas[1] = comidaPreferidaUsuario;
console.log(comidasPreferidas);

/*-------Exercício 3-------
Faça um programa, seguindo os passos:

  a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

  b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

  c) Imprima o array no console

  d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2

  e) Remova da lista o item de índice que o usuário escolheu.

  f) Imprima o array no console
*/

let listaDeTarefas = [];

listaDeTarefas[0] = prompt("Digite a primeira tarefa: ");
listaDeTarefas[1] = prompt("Digite a segunda tarefa: ");
listaDeTarefas[2] = prompt("Digite a terceira tarefa: ");

console.log(listaDeTarefas);

removerItem = prompt("Digite o índice de uma terefa (0, 1 ou 2): ");

listaDeTarefas.splice(removerItem, 1);

console.log(listaDeTarefas);

//-----------------------Desafios-----------------------

/*-------Exercício 1-------
Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços  */

let frase = prompt("Digite uma frase: ");
let listaDaFrase = frase.split(" ");
console.log(listaDaFrase);

/*-------Exercício 2-------
Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array    */

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(array.indexOf("Abacaxi"), array[array.indexOf("Abacaxi")].length);
