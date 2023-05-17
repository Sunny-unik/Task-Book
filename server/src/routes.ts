import express from "express";
import UserController from "./controller";

const router = express.Router();

const { login, getUsers, createUser } = UserController;

router.get("/", getUsers);
router.post("/login", login);
router.post("/", createUser);

export default router;
