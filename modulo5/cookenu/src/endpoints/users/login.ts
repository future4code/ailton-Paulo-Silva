import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { compareHash } from "../../services/hashManager";
import generateId from "../../services/idGenerator";
import { userTableName } from "../../types";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    const [user] = await connection(userTableName).where({ email });

    const passwordIsCorrect: boolean = compareHash(password, user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Invalid crendentials");
    }

    const token = generateToken({ id: user.id });

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
