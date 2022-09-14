import app from "./app";
import UserController from "./endpoints/UserController";

const userController = new UserController();

app.post("/user/create", userController.create);
app.post("/user/login", userController.login);
app.put("/user/edit", userController.edit);
app.get("/user/all", userController.getUsers);