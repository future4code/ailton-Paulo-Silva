export type Transaction = {
  value: Number;
  date: Date;
  description: string;
};

export type Account = {
  nome: string;
  CPF: string;
  dataDeNascimento: Date;
  balance: number;
  statement: Array<Transaction>;
};
