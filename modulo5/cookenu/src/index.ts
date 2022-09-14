import app from "./app";
import UserController from "./endpoints/UserController";

const userController = new UserController();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/user/profile", userController.getProfile);
app.get("/user/:id", userController.getProfileById);