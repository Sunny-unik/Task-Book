import { Request, Response } from "express";
import userSchema, { boardSchema } from "./schema";
import userInterface, { boardInterface } from "./types";

export default class UserController {
  static async login(req: Request, res: Response) {
    userSchema
      .findOne({ email: req.body.email, password: req.body.password })
      .then((user) => res.send({ data: user }))
      .catch((err) => console.log(err));
  }

  static async getUsers(req: Request, res: Response) {
    await userSchema
      .find()
      .select(req.body.query ? req.body.query : "_id name email password created profile")
      .then((users: userInterface[]) => res.json({ total: users.length, data: users }))
      .catch((err: Error) => console.log(err));
  }

  static async createUser(req: Request, res: Response) {
    req.body.boardId = (
      (await BoardController.createBoard<boardInterface>(req)) as boardInterface
    )._id;
    const user = await new userSchema(req.body);
    user
      .save()
      .then((user: userInterface) => res.status(200).json({ data: user }))
      .catch((err: Error) => res.json({ data: null, error: err }));
  }
}

export class BoardController {
  static async getBoards(_req: Request, res: Response) {
    await boardSchema
      .find()
      .then((users: boardInterface[]) => res.json({ total: users.length, data: users }))
      .catch((err: Error) => console.log(err));
  }

  static async createBoard<T>(req: Request, res?: Response): Promise<T | void> {
    const board = await new boardSchema(req.body);
    try {
      const boardData = await board.save();

      if (res) res.send({ data: boardData });
      else return boardData as T;
    } catch (err) {
      console.log(err);
    }
  }
}
