import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { userTableName } from "../../types";

export default async function getUserById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization!;

    const userid = req.params.id;

    getTokenData(token);

    const [user] = await connection(userTableName).where({ id: userid });

    const { id, email, name } = user;

    res.send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
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
