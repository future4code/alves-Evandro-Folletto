import app from "./app";
import UserController from "./endpoints/UserController";

const userController = new UserController();

app.post("/signup", userController.signup);