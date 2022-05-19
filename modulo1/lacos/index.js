//------------------Exercícios de interpretação de código--------------------
// 1-------------------
//O resultado impresso no console será 10

// 2-------------------
// a. Serão impressos os números da lista que são maiores que 18: 19, 21, 23, 25, 27, 30
// b. Poderia ser usado o método indexOf()

// 3-------------------
//Uma linha com 1 asterísco, seguida por outra com 2, seguida por outra com 3 e depois 4

//------------------Exercícios de escrita de código--------------------
// 1-------------------
numerosDeBichinhos = Number(prompt("Quanto bichinhos você têm? "));

let count = 0;
let arrayBichos = [];

if (numerosDeBichinhos === 0) {
  console.log("Que pena! Você poderia adotar um pet!");
} else {
  while (count < numerosDeBichinhos) {
    let novoBicho = prompt("Digite, um por um, os nomes dos seus bichos: ");
    arrayBichos[count] = novoBicho;
    count++;
  }
  console.log(arrayBichos);
}

// 2-------------------
//a
const imprimirItensArray = (arrayOriginal) => {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]);
  }
};

imprimirItensArray([4, 5, 8, 7, 2, 9, 5]);

//b
const dividirNumerosArray = (arrayOriginal) => {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i] / 10);
  }
};

dividirNumerosArray([40, 28, 50, 19, 75, 10, 47, 96]);

//c*
const criarArrayNumerosPares = (arrayOriginal) => {
  let arrayPares = [];
  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
      arrayPares[i] = arrayOriginal[i];
    }
  }
  console.log(arrayPares);
};

criarArrayNumerosPares([40, 28, 50, 19, 75, 10, 47, 96]);

//d
const imprimirElementoDoIndex = (arrayOriginal) => {
  let arrayString = [];
  for (let i = 0; i < arrayOriginal.length; i++) {
    arrayString[i] = `O elemento do index ${i} é: ${arrayOriginal[i]}`;
  }
  console.log(arrayString);
};

imprimirElementoDoIndex([40, 28, 50, 19, 75, 10, 47, 96]);

//e
const imprimirMaiorEMenorNumeroArray = (arrayOriginal) => {
  let maiorNumero = 0;
  let menorNumero = 0;
  let lastNumber = 0;

  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > lastNumber) {
      maiorNumero = arrayOriginal[i];
    }
    if (arrayOriginal[i] < lastNumber) {
      menorNumero = arrayOriginal[i];
    }
    lastNumber = arrayOriginal[i];
  }
  console.log(
    `O maior número é ${maiorNumero} e o menor número é ${menorNumero}`
  );
};

imprimirMaiorEMenorNumeroArray([40, 28, 50, 19, 75, 10, 47, 96]);

//------------------Desafios--------------------
// 1-------------------

const adivinharNumero = () => {
  let numeroPrimeiroJogador = Number(prompt("Jogador 1: Digite um número: "));
  console.log("Vamos jogar!");

  let numeroSegundoJogador = Number(prompt("Jogador 2: Chute um número: "));
  count = 0;

  while (numeroPrimeiroJogador != numeroSegundoJogador) {
    count++;
    console.log(`O número chutado foi: ${numeroSegundoJogador}`);
    if (numeroSegundoJogador < numeroPrimeiroJogador) {
      console.log("Errou. O número escolhido é menor.");
      numeroSegundoJogador = Number(prompt("Jogador 2: Chute outro número: "));
    } else if (numeroSegundoJogador > numeroPrimeiroJogador) {
      console.log("Errou. O número escolhido é maior.");
      numeroSegundoJogador = Number(prompt("Jogador 2: Chute outro número: "));
    } else {
      break;
    }
  }

  if (numeroSegundoJogador === numeroPrimeiroJogador) {
    console.log(`Acertou!
  O número de tentativas foi: ${count}`);
  } else {
    console.log("Algo deu errado. ");
  }
};

adivinharNumero();

// 2-------------------

const adivinharNumero1Player = () => {
  let numeroAleatorio = Math.floor(Math.random() * 100);
  let numeroJogador = Number(prompt("Jogador: Digite um número: "));
  console.log("Vamos jogar!");

  count = 0;

  while (numeroJogador != numeroAleatorio) {
    count++;
    console.log(`O número chutado foi: ${numeroJogador}`);
    if (numeroJogador < numeroAleatorio) {
      console.log("Errou. O número escolhido é menor.");
      numeroJogador = Number(prompt("Jogador: Chute outro número: "));
    } else if (numeroJogador > numeroAleatorio) {
      console.log("Errou. O número escolhido é maior.");
      numeroJogador = Number(prompt("Jogador: Chute outro número: "));
    } else {
      break;
    }
  }

  if (numeroJogador === numeroAleatorio) {
    console.log(`Acertou!
  O número de tentativas foi: ${count}`);
  } else {
    console.log("Algo deu errado. ");
  }
};

adivinharNumero1Player();
