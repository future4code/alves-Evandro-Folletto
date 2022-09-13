import { app } from "./app";
import { createUser } from "./endpoints/1-createUser";
import { getAllUsers } from "./endpoints/2_8-getAllUsers";
import { createProduct } from "./endpoints/3-createProduct";
import { getAllProducts } from "./endpoints/4_7-getAllProducts";
import { createPurchase } from "./endpoints/5-createPurchase";
import { getPurchaseById } from "./endpoints/6-getPurchaseById";

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.post("/products", createProduct);
app.get("/products", getAllProducts);
app.post("/purchases", createPurchase);
app.get("/users/:id/purchases", getPurchaseById);