//------------------Exercícios de interpretação de código--------------------
// 1-------------------
// a. Será impresso no console o item do objeto, o seu índice e seu array.

// 2-------------------
// a. Será impresso no console um único array com o valor de cada chave "nome", excluindo as chaves "apelido", devido ao uso do return

// 3-------------------
// a. Serão impressos no console os itens que tiverem o valor da chave "apelido" diferente de "Chijo"

//------------------Exercícios de escrita de código--------------------
// 1-------------------
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

//a
const nomeDogs = pets.map(function (pets) {
  return pets.nome;
});

console.log(nomeDogs);

//b
const dogsSalsicha = pets.filter(function (pets) {
  if (pets.raca === "Salsicha") {
    return pets;
  } else {
    return false;
  }
});

console.log(dogsSalsicha);

//c
const retornaStrings = pets
  .filter((pets) => {
    return pets.raca === "Poodle";
  })
  .map((pets) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`;
  });

console.log(retornaStrings);

// 2-------------------

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//a
const nomesProdutos = produtos.map(function (produtos) {
  return produtos.nome;
});

console.log(nomesProdutos);

//b
const nomeEPrecoDesconto = produtos.map((produtos) => {
  delete produtos.categoria;
  produtos.preco = (produtos.preco - (produtos.preco / 100) * 5).toFixed(2);
  return produtos;
});

console.log(nomeEPrecoDesconto);

//c
const objetosBebida = produtos.filter(function (produtos) {
  if (produtos.categoria === "Bebidas") {
    return produtos;
  } else {
    return false;
  }
});

console.log(objetosBebida);

//d
const objetosYpe = produtos
  .filter((produtos) => {
    return produtos.nome.includes("Ypê");
  })
  .map((produtos) => {
    return produtos;
  });

console.log(objetosYpe);

//e
const objetosYpeString = produtos
  .filter((produtos) => {
    return produtos.nome.includes("Ypê");
  })
  .map((produtos) => {
    return `Compre ${produtos.nome} por ${produtos.preco}`;
  });

console.log(objetosYpeString);
