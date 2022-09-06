import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
  try {
    const { nome, CPF, dataDeNascimentoString } = req.body;
    const [dia, mes, ano] = dataDeNascimentoString.split("/");
    const dataDeNascimento: Date = new Date(`${ano}-${mes}-${dia}`);

    const idadeEmMilissegundos: number =
      new Date().getTime() - dataDeNascimento.getTime();

    const idadeEmAno: number = idadeEmMilissegundos / 1000 / 60 / 60 / 24 / 365;

    if (idadeEmAno < 18) {
      res.statusCode = 406;
      throw new Error("Idade menor que 18 anos");
    }

    accounts.push({
      nome,
      CPF,
      dataDeNascimento,
      balance: 0,
      statement: [],
    });

    res.status(201).send("Criação de conta bem sucedida!");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

app.get("/users/all", (req: Request, res: Response) => {
  try {
    if (!accounts.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta foi encontrada");
    }
    res.status(200).send(accounts);
  } catch (error) {
    res.send("error");
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
