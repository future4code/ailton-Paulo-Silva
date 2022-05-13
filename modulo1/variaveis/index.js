/*-----------------------Exercícios de interpretação de código-----------------------

-------Exercício 1-------

-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
  let a = 10
  let b = 10

  console.log(b)

  b = 5
  console.log(a, b)

-Respostas:
  10
  10 5

-------Exercício 2-------

-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
  let a = 10
  let b = 20
  c = a
  b = c
  a = b

  console.log(a, b, c)

-Respostas:
  10 10 10

-------Exercício 3-------

-Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

  let p = prompt("Quantas horas você trabalha por dia?")
  let t = prompt("Quanto você recebe por dia?")
  alert(`Voce recebe ${t/p} por hora`)

-Respostas:
let horasDiarias = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasDiarias} por hora`) */

//-----------------------Exercícios de escrita de código-----------------------

/*-------Exercício 1-------

-Construa um programa, seguindo os seguintes passos:

  a) Declare uma variável para armazenar um nome, sem atribuir um valor.

  b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

  c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

  d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

  e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

  f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

  g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu  */

let nome;
let idade;

console.log(typeof nome, typeof idade);

//variáveis do tipo undefined, pois não tiveram valores atribuídos a si

nome = prompt("Digite o seu nome: ");
idade = prompt("Digite sua idade: ");

console.log(typeof nome, typeof idade);

//variável idade é tipo string, uma vez que o prompt sempre retorna uma string. O uso do Number() seria uma alternativa.

console.log(`Olá ${nome}, você tem ${idade} anos.`);

/*-------Exercício 2-------

-Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    Você está usando uma roupa azul hoje? - SIM
*/

let pergunta1 = prompt("Você está usando roupa preta hoje? ");
let pergunta2 = prompt("Você está usando tênis hoje? ");
let pergunta3 = prompt("Você está na sua casa? ");

console.log(`Você está usando roupa preta hoje? - ${pergunta1}`);
console.log(`Você está usando tênis hoje? - ${pergunta2}`);
console.log(`Você está na sua casa? - ${pergunta3}`);

/*-------Exercício 3-------

-Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

    let a = 10
    let b = 25

  Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.

  Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

    let a = 10
    let b = 25

  // Aqui faremos uma lógica para trocar os valores

  // Depois de trocados, teremos o seguinte resultado:

    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10

    Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).
*/
let a = 10;
let b = 25;
let c = 10;

a = b;
b = c;

console.log(`O novo valor de a é: ${a}`);
console.log(`O novo valor de b é: ${b}`);

/*-----------------------Desafios-----------------------

-Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
  1. O primeiro número somado ao segundo número resulta em: x.
  2. O primeiro número multiplicado pelo segundo número resulta em: y.
*/

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
