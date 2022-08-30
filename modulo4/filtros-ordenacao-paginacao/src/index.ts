import { app } from "./app";
import { getUsersByName } from "./endpoints/1.a-getUsersByName";
import { getUsersByType } from "./endpoints/1.b-getUsersByType";

// Exercício 1
// a)
app.get("/users", getUsersByName)

// b)
app.get("/users/:type", getUsersByType)