//------------------Exercícios de interpretação de código--------------------
// 1-------------------
// a. Verifica se o número fornecido pelo usuário é par
// b. Somente para números pares
// c. Somente para números ímpares

// 2-------------------
// a. O código informa os preços das frutas usando o switch case
// b. "O preço da fruta maçã é R$ 2.25"
// c. O preço impresso no console seria 5. Sem o break, o comando switch continua a execultar as expressões seguintes

// 3-------------------
// a. O código da primeira linha ao ser execultado atribui a variável o número digitado pelo usuário
// b. Caso o número digitado seja 10, será impresso "Este número passou no teste". Caso seja -10, nada será impresso
// c. Heverá erro no console devido a variável "mensagem" não está no escopo global do código

//------------------Exercícios de escrita de código--------------------
// 1-------------------

let idadeUsuario = Number(prompt("Digite sua idade: "));

if (idadeUsuario >= 18) {
  console.log("Você pode dirigir.");
} else {
  consolo.log("Você não pode dirigir.");
}

// 2-------------------

let turnoUsuario = prompt(
  "Qual turno você estuda? Digite 'M' para matutiono, V para vespertino ou 'N' para noturno: "
);

if (turnoUsuario === "M") {
  console.log("Bom dia!");
} else if (turnoUsuario === "V") {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// 3-------------------

let turnoUsuario2 = prompt(
  "Qual turno você estuda? Digite 'M' para matutiono, V para vespertino ou 'N' para noturno: "
);

switch (turnoUsuario2.toUpperCase()) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Algo deu errado.");
}

// 4-------------------

generoFilme = prompt("Qual o gênero do filme? ");
valorIngresso = Number(prompt("Qual o valor do ingresso? "));

if (generoFilme.toLowerCase() === "fantasia" && valorIngresso <= 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

//------------------Desafios--------------------
// 1-------------------

generoFilme = prompt("Qual o gênero do filme? ");
valorIngresso = Number(prompt("Qual o valor do ingresso? "));
lancheEscolhido = prompt(
  "As opções de lanche são pipoca, chocolate ou doces. Digite sua escolha: "
);

if (generoFilme.toLowerCase() === "fantasia" && valorIngresso <= 15) {
  console.log(`Bom filme! Aproveite o seu ${lancheEscolhido}!`);
} else {
  console.log("Escolha outro filme :(");
}

// 2-------------------

nomeCliente = prompt("Digite seu nome: ");
tipoJogo = prompt(
  "Digite 'DO' para jogo doméstico e 'IN' para jogo internacional: "
);
etapa = prompt(
  "Digite a etapa do jogo. 'SF' para semi-final, 'DT' para decisão de terceiro lugar e 'FI' para final: "
);
categoria = Number(prompt("Digite a categoria (1, 2, 3 ou 4): "));
quantidadeIngressos = Number(prompt("Digite a quatidade de ingressos: "));

tipoJogo = tipoJogo.toUpperCase();
etapa = etapa.toUpperCase();

let valorIngresso = 0;

if (categoria === 1) {
  if (etapa === "SF") {
    valorIngresso = 1320;
  } else if (etapa === "DT") {
    valorIngresso = 660;
  } else if (etapa === "FI") {
    valorIngresso = 1980;
  }
} else if (categoria === 2) {
  if (etapa === "SF") {
    valorIngresso = 880;
  } else if (etapa === "DT") {
    valorIngresso = 440;
  } else if (etapa === "FI") {
    valorIngresso = 1320;
  }
} else if (categoria === 3) {
  if (etapa === "SF") {
    valorIngresso = 550;
  } else if (etapa === "DT") {
    valorIngresso = 330;
  } else if (etapa === "FI") {
    valorIngresso = 880;
  }
} else if (categoria === 4) {
  if (etapa === "SF") {
    valorIngresso = 220;
  } else if (etapa === "DT") {
    valorIngresso = 170;
  } else if (etapa === "FI") {
    valorIngresso = 330;
  }
}

let etapaNome = "";
if (etapa === "DT") {
  etapaNome = "Decisão do 3º lugar";
} else if (etapa === "SF") {
  etapaNome = "Semi-Final";
} else if (etapa === "FI") {
  etapaNome = "Final";
}

if (tipoJogo === "DO") {
  console.log(`---Dados da compra---
  Nome do cliente:  ${nomeCliente}
  Tipo do jogo:  Nacional
  Etapa do jogo:  ${etapaNome}
  Categoria:  ${categoria}
  Quantidade de Ingressos:  ${quantidadeIngressos} ingressos
  ---Valores---
  Valor do ingresso:  R$ ${valorIngresso}
  Valor total:  R$ ${valorIngresso * quantidadeIngressos}`);
} else {
  valorIngresso *= 4.1;
  console.log(`---Dados da compra---
    Nome do cliente:  ${nomeCliente}
    Tipo do jogo:  Internacional
    Etapa do jogo:  ${etapaNome}
    Categoria:  ${categoria}
    Quantidade de Ingressos:  ${quantidadeIngressos} ingressos
    ---Valores---
    Valor do ingresso:  U$ ${valorIngresso.toFixed([2])}
    Valor total:  U$ ${(valorIngresso * quantidadeIngressos).toFixed([2])}`);
}
