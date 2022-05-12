/*-----------------------Exercícios de interpretação de código-----------------------
-------Exercício 1-------
-Leia o código abaixo

  function minhaFuncao(variavel) {
    return variavel * 5
  }

  console.log(minhaFuncao(2))
  console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

-Respostas:
10
50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

-Resposta:
50

-------Exercício 2-------

- Leia o código abaixo

  let textoDoUsuario = prompt("Insira um texto");

  const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
  }

  const resposta = outraFuncao(textoDoUsuario)
  console.log(resposta)

a) Explique o que essa função faz e qual é sua utilidade

-Resposta:
Verifica se dentro da string inserida pelo usuário existe o conjunto de caracteres "cenoura".

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:

  i.   `Eu gosto de cenoura`
  ii.  `CENOURA é bom pra vista`
  iii. `Cenouras crescem na terra`

-Resposta:
True
True
True

//-----------------------Exercícios de escrita de código-----------------------

-------Exercício 1-------

-Escreva as funções explicadas abaixo:

  a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

  "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

  Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem. */

const imprimirMensagem = () => {
  return `Eu sou Paulo Victor, tenho 19 anos, moro em Belo Horizonte e sou estudante.`;
};

console.log(imprimirMensagem());

/*
  b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].     */

nomeUsuario = prompt("Qual é o seu nome? ");
idadeUsuario = prompt("Quantos anos você tem? ");
cidadeUsuario = prompt("Onde você mora? ");
profissaoUsuario = prompt("Qual a sua profissão? ");

const unificarInformacoes = () => {
  return `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`;
};

console.log(unificarInformacoes());

/*-------Exercício 2-------

- Escreva as funções explicadas abaixo:

  a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado. */

const somar = (n1, n2) => {
  return n1 + n2;
};
console.log(somar(10, 20));

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const maiorOuIgual = (n1, n2) => {
  return n1 >= n2;
};
console.log(maiorOuIgual(30, 20));

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

const parOuNao = (n1) => {
  return n1 % 2 === 0;
};
console.log(parOuNao(20));

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

const imprimirString = (string) => {
  console.log(`${string.length} ${string.toLowerCase()}`);
};

console.log(imprimirString("Frase escrita para testar a função"));

/*-------Exercício 3-------

-Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

  Números inseridos: 30 e 3
  Soma: 33
  Diferença: 27
  Multiplicação: 90
  Divisão: 10               */

const soma = (n1, n2) => {
  return n1 + n2;
};
const subtracao = (n1, n2) => {
  return n1 - n2;
};
const multiplicacao = (n1, n2) => {
  return n1 * n2;
};
const divisao = (n1, n2) => {
  return n1 / n2;
};

const primeiroNumero = Number(prompt("Digite um numero: "));
const segundoNumero = Number(prompt("Digite outro número: "));

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}
Soma: ${soma(primeiroNumero, segundoNumero)}
Diferença: ${subtracao(primeiroNumero, segundoNumero)}
Multiplicação: ${multiplicacao(primeiroNumero, segundoNumero)}
Divisão: ${divisao(primeiroNumero, segundoNumero)} `);

/*-----------------------Desafios-----------------------

-------Exercício 1-------

=Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

  a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro */

const imprimirNaTela = (imprimir) => {
  console.log(imprimir);
};

/*
  b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo    */

const somarValores = (v1, v2) => {
  resultado = v1 + v2;
  imprimirNaTela(resultado);
};

somarValores(10, 20);

/*-------Exercício 2-------
- Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. */

const teoremaDePitagoras = (cateto1, cateto2) => {
  return (hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
};

teoremaDePitagoras(25, 20);
