import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import generateId from "../../services/idGenerator";
import { userTableName } from "../../types";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    const id: string = generateId();

    const cypherPassword: string = generateHash(password);

    const token: string = generateToken({ id });

    await connection(userTableName).insert({
      id,
      name,
      email,
      password: cypherPassword,
    });

    res.send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");

    if (res.statusCode === 200) {
      res.status(500).send("Internal server error");
    } else {
      res.send(error);
    }
  }
}
