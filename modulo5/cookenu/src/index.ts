import app from "./app";
import UserController from "./endpoints/UserController";
import RecipeController from "./endpoints/RecipeController";

const userController = new UserController();
const recipeController = new RecipeController();

app.post("/signup", userController.signup);
app.post("/login", userController.login);

app.get("/user/feed", userController.feed);
app.get("/user/profile", userController.getProfile);
app.get("/user/:id", userController.getProfileById);
app.post("/user/follow", userController.follow);
app.post("/user/unfollow", userController.unfollow);

app.post("/recipe", recipeController.create);
app.get("/recipe/:id", recipeController.getRecipeById);
app.put("/recipe/edit", recipeController.editRecipeById);
app.delete("/recipe/delete/:id", recipeController.deleteRecipeById);