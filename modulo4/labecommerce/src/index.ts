import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProduct } from "./endpoints/createProduct";

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.post("/products", createProduct);