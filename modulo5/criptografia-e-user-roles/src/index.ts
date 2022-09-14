import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getUser from "./endpoints/getUser";
import deleteUser from "./endpoints/deleteUser";

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", getUser)
app.delete("/user/:id", deleteUser)