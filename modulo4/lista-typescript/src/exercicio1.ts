function stringNomeENascimento(nome: string, data: string): string {
  return `Olá me chamo ${nome}, nasci no dia ${data.slice(
    0,
    2
  )} do mês de ${data.slice(3, 5)} do ano de ${data.slice(6, 10)}`;
}

console.log(stringNomeENascimento("José", "15/12/1957"));
