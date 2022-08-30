import { app } from "./app";
import { getUsersByName } from "./endpoints/1.a-getUsersByName";
import { getUsersByType } from "./endpoints/1.b-getUsersByType";
import { getUsersByOrder } from "./endpoints/2-getUsersByOrder";
import { getUsersByPage } from "./endpoints/3-getUsersByPage";

// Exercício 1
// a)
// app.get("/users", getUsersByName)

// b)
// app.get("/users/:type", getUsersByType)

// Exercício 2
// app.get("/users", getUsersByOrder)

// Exercício 3
app.get("/users", getUsersByPage)