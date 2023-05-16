import mongoose, { Schema } from "mongoose";
import userInterface, { boardInterface } from "./types";

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [2, "Name is too short!"],
    maxLength: 55,
    required: true
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 16,
    required: true
  },
  email: { type: String, minLength: 5, maxLength: 50, required: true },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "boards",
    required: true
  }
});

const boardSchema = mongoose.model<boardInterface>(
  "boards",
  new Schema({
    name: {
      type: String,
      minLength: [2, "Name is too short!"],
      maxLength: 23,
      required: true
    },
    lists: { type: Array as any, default: [] }
  })
);

export default mongoose.model<userInterface>("users", userSchema);
export { boardSchema };
