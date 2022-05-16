/*-----------------------Exercícios de interpretação de código-----------------------

-------Exercício 1-------

-Leia o código abaixo:

  const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
      "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
      "Virginia Cavendish"
      ],
    transmissoesHoje: [
      {canal: "Telecine", horario: "21h"},
      {canal: "Canal Brasil", horario: "19h"},
      {canal: "Globo", horario: "14h"}
      ]
  }

  console.log(filme.elenco[0])
  console.log(filme.elenco[filme.elenco.length - 1])
  console.log(filme.transmissoesHoje[2])

a. O que vai ser impresso no console?
-Resposta:

Matheus Nachtergaele
Virginia Cavendish
{canal: 'Globo', horario: '14h'}

-------Exercício 2-------

-Leia o código abaixo:
  const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
  }

  const gato = {...cachorro, nome: "Juba"}

  const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

  console.log(cachorro)
  console.log(gato)
  console.log(tartaruga)

a. O que vai ser impresso no console?
Resposta:

{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b. O que faz a sintaxe dos três pontos antes do nome de um objeto?
-Resposta:

espelha o objeto

-------Exercício 3-------
-Leia o código abaixo
  function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
  }

  const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
  }

  console.log(minhaFuncao(pessoa, "backender"))
  console.log(minhaFuncao(pessoa, "altura"))

a. O que vai ser impresso no console?
-Resposta:

false

b. Explique o valor impresso no console. Você sabe por que isso aconteceu?
-Resposta:

O "false" foi impresso, pois é o valor da propriedade backender. Já o valor de "altura" não foi impresso, pois a propriedade "pessoa" não foi definida.


//-----------------------Exercícios de escrita de código-----------------------

/*-------Exercício 1-------
-Resolva os passos a seguir:

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

  // Exemplo de entrada
  const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
  }

  // Exemplo de saída
  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

-Resposta:        */

const pessoa = {
  nome: "Lúcia",
  apelidos: ["Lú", "Lucinha", "Lulu"],
};

function imprimirNaTela(obj) {
  console.log(
    `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
  );
}

/*
b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

-Respota:      */

const pessoa2 = {
  ...pessoa,
  apelidos: ["Lucy", "Luluzinha", "Lua"],
};

imprimirNaTela(pessoa2);

/*-------Exercício 2-------

-Resolva os passos a seguir:

a)Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
-Resposta:         */

const obj1 = {
  nome: "Carlos",
  idade: 52,
  profissao: "Carpinteiro",
};

const obj2 = {
  nome: "Joana",
  idade: 62,
  profissao: "Costureira",
};
/*

b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

  // Exemplo de entrada
  const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
  }

  // Exemplo de saída
  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

-Resposta:        */

function paraArray(obj) {
  console.log([
    obj.nome,
    obj.nome.length,
    obj.idade,
    obj.profissao,
    obj.profissao.length,
  ]);
}

paraArray(obj1);
paraArray(obj2);

/*-------Exercício 2-------
-Resolva os passos a seguir:

a)Crie uma variável de escopo global que guarde um array vazio chamada carrinho.

-Resposta:      */

carrinho = [];

/*
b)Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

-Resposta:      */

const fruta1 = {
  nome: "Maça",
  disponibilidade: true,
};

const fruta2 = {
  nome: "Uva",
  disponibilidade: true,
};

const fruta3 = {
  nome: "Laranja",
  disponibilidade: true,
};

/*
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados

-Resposta:      */

function colocarNoCarrinho(obj) {
  carrinho.push(obj);
  return carrinho;
}

colocarNoCarrinho(fruta1);
colocarNoCarrinho(fruta2);
colocarNoCarrinho(fruta3);

/*
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

-Resposta:      */

console.log(carrinho);

/*-----------------------Exercícios de escrita de código-----------------------

-Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

-Resposta:      */

function informacoesPessoa() {
  nome = prompt("Digite seu nome: ");
  idade = Number(prompt("Digite sua idade: "));
  profissao = prompt("Digite sua profissão: ");

  console.log(
    (infoPessoas = {
      nome: nome,
      idade: idade,
      profissao: profissao,
    })
  );
  console.log(typeof infoPessoas);
}

informacoesPessoa();

/*
-Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

  O primeiro filme foi lançado antes do segundo? false
  O primeiro filme foi lançado no mesmo ano do segundo? true

-Resposta:      */

function filmes() {
  filme1 = {
    nome: "The Batman",
    anoDeLancamento: 2022,
  };
  filme2 = {
    nome: "Doctor Strange in the Multiverse of Madness",
    anoDeLancamento: 2022,
  };

  console.log(`
  O primeiro filme foi lançado antes do segundo? ${
    filme1.anoDeLancamento < filme2.anoDeLancamento
  }
  O primeiro filme foi lançado no mesmo ano do segundo? ${
    filme1.anoDeLancamento === filme2.anoDeLancamento
  }`);
}

filmes();

/*
-Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

-Resposta:      */

function controleDeEstoque(obj) {
  obj.disponibilidade = !obj.disponibilidade;
  return obj.disponibilidade;
}

controleDeEstoque(fruta2);
console.log(carrinho);
