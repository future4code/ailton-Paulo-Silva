// questão 1.a
// process.argv[x], sendo x o índice do argumento passado

// questão 1.b
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`);

// questão 1.c
console.log(
  `Olá, ${process.argv[2]}! Você tem ${
    process.argv[3]
  }! Em sete anos você terá ${Number(process.argv[3]) + 7}!`
);
