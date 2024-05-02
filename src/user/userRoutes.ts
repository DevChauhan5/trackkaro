import { Hono } from "hono";
import {
  deleteUserController,
  loginController,
  logoutController,
  registerController,
  userProfileController,
} from "./userController";
import authMiddleware from "../../middlewares/authMiddleware";

const user = new Hono();

user.post("/register", (c) => registerController(c));

user.post("/login", (c) => loginController(c));

user.post("/logout", authMiddleware, (c) => logoutController(c));

user.get("/profile", authMiddleware, (c) => userProfileController(c));

user.delete("/delete-user", authMiddleware, (c) => deleteUserController(c));

export default user;
