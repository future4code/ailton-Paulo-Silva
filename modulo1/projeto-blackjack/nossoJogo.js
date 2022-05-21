console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Deseja iniciar uma nova rodada?")) {
  const cartasUsuario = {
    primeraCarta: comprarCarta(),
    segundaCarta: comprarCarta(),
  };
  const cartasComputador = {
    primeraCarta: comprarCarta(),
    segundaCarta: comprarCarta(),
  };
  const subtracaoPontuacoes =
    cartasUsuario.primeraCarta.valor +
    cartasUsuario.segundaCarta.valor -
    (cartasComputador.primeraCarta.valor + cartasComputador.segundaCarta.valor);

  console.log(`Usuário - cartas: ${cartasUsuario.primeraCarta.texto} ${
    cartasUsuario.segundaCarta.texto
  }  - pontuação ${
    cartasUsuario.primeraCarta.valor + cartasUsuario.segundaCarta.valor
  }
Computador - cartas: ${cartasComputador.primeraCarta.texto} ${
    cartasComputador.segundaCarta.texto
  }  - pontuação ${
    cartasComputador.primeraCarta.valor + cartasComputador.segundaCarta.valor
  }
   `);

  if (subtracaoPontuacoes === 0) {
    console.log("Empate!");
  } else if (subtracaoPontuacoes > 0) {
    console.log("O usuário ganhou!");
  } else {
    console.log("O computador ganhou!");
  }
} else {
  console.log("O jogo acabou");
}
