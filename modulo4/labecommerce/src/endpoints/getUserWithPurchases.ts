import { Request, Response } from "express";
import selectUsersWithPurchases from "../data/selectUsersWithPurchases";

export default async function getUserWithPurchases(
  req: Request,
  res: Response
) {
  try {
    const allUsersWithPurchases = await selectUsersWithPurchases();

    res.status(200).send(allUsersWithPurchases);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
