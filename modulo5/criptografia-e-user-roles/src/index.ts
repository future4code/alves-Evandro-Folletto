import app from "./app";
import getAllusers from "./endpoints/getAllusers";

app.get("/user", getAllusers)