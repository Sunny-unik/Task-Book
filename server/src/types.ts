import { Document } from "mongoose";

export default interface userInterface extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  created: Date;
  profile: string;
  cartItems: string[];
}

export interface listInterface {
  task: string;
  status: "done" | "progress";
}

export interface boardInterface extends Document {
  name: string;
  lists: listInterface[];
}
