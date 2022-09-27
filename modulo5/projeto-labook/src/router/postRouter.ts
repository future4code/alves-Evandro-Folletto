import { Router } from 'express';
import PostController from './../controller/PostController';
import PostBusiness from './../business/PostBusiness';
import PostDatabase from './../database/PostDatabase';
import { IdGenerator } from './../services/IdGenerator';
import { Authenticator } from './../services/Authenticator';

export const postRouter = Router();

const postController = new PostController(
  new PostBusiness(
    new PostDatabase(),
    new IdGenerator(),
    new Authenticator()
  )
);

postRouter.post("/create", postController.create);
postRouter.get("/all", postController.getAllPosts);
postRouter.delete("/delete/:id", postController.delete);
postRouter.post("/like/add/:id", postController.like);
postRouter.delete("/like/remove/:id", postController.dislike);