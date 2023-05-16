import { Request, Response } from "express";
import userSchema from "./schema";
import userInterface from "./types";

export default class UserController {
  static async getUsers(req: Request, res: Response) {
    await userSchema
      .find()
      .select(
        req.body.query
          ? req.body.query
          : "_id name email password created profile"
      )
      .then((users: userInterface[]) =>
        res.json({ total: users.length, data: users })
      )
      .catch((err: Error) => console.log(err));
  }

  static async createUser(req: Request, res: Response) {
    const user = await new userSchema(req.body);
    user
      .save()
      .then((user: userInterface) => res.status(200).json({ data: user }))
      .catch((err: Error) => console.log(err));
  }
}
