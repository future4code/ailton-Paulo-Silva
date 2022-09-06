export type Produto = {
  id: string;
  name: string;
  price: number;
};

export const listaProdutos: Produto[] = [
  {
    id: "01",
    name: "Camiseta",
    price: 49,
  },
  {
    id: "02",
    name: "Calça",
    price: 109,
  },
  {
    id: "03",
    name: "Tênis",
    price: 249,
  },
];
