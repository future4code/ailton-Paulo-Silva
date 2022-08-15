type usuario = {
  name: string;
  email: string;
  role: Role;
};

enum Role {
  ADMIN = "admin",
  USER = "user",
}

const listaUsuarios: usuario[] = [
  { name: "Rogério", email: "roger@email.com", role: Role.USER },
  { name: "Ademir", email: "ademir@email.com", role: Role.ADMIN },
  { name: "Aline", email: "aline@email.com", role: Role.USER },
  { name: "Jéssica", email: "jessica@email.com", role: Role.USER },
  { name: "Adilson", email: "adilson@email.com", role: Role.USER },
  { name: "Carina", email: "carina@email.com", role: Role.ADMIN },
];

const filtroEmails = (lista: usuario[]): string[] => {
  const listaEmailsFiltrada: string[] = lista
    .filter((u) => u.role === Role.ADMIN)
    .map((u) => u.email);
  return listaEmailsFiltrada;
};

console.log(filtroEmails(listaUsuarios));
